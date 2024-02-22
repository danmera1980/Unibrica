import { InjectRepository } from '@nestjs/typeorm';
import { DebtSheetsEntity } from '../entities/debtSheets.entity';
import * as XLSX from 'xlsx';
import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ErrorManager } from 'src/utils/error.manager';
import { DebtorEntity } from '../entities/debtors.entity';
import { AccountEntity } from '../entities/accounts.entity';
import { UserEntity } from 'src/users/entities/users.entity';
import { ClientEntity } from 'src/clients/entities/clients.entity';
import { BankEntity } from '../../banks/entities/banks.entity';
import { DebtEntity } from '../entities/debts.entity';
import { PaginationQueryDto } from '../controllers/debts.controller';
import { RepeatedDebtEntity } from '../entities/repeatedDebts.entity';

@Injectable()
export class DebtsService {
  constructor(
    @InjectRepository(DebtSheetsEntity)
    private readonly debtSheetRepository: Repository<DebtSheetsEntity>,
    @InjectRepository(DebtorEntity) private readonly debtorRepository: Repository<DebtorEntity>,
    @InjectRepository(DebtEntity) private readonly debtRepository: Repository<DebtEntity>,
    @InjectRepository(AccountEntity) private readonly accountRepository: Repository<AccountEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ClientEntity) private readonly clientEntity: Repository<ClientEntity>,
    @InjectRepository(BankEntity) private readonly bankEntity: Repository<BankEntity>,
    @InjectRepository(RepeatedDebtEntity)
    private readonly repeatedDebtRepository: Repository<RepeatedDebtEntity>
  ) {}

  public async uploadDebtSheet(
    file: Express.Multer.File,
    userId: string,
    clientId: string,
    bankId: string
  ): Promise<any> {
    try {
      // Create new debt sheet
      const debtSheet = new DebtSheetsEntity();
      debtSheet.date = new Date();
      debtSheet.fileName = file.originalname;
      debtSheet.filePath = file.path;

      const user = await this.userRepository.findOne({
        where: { id: userId },
      });
      debtSheet.user = user;

      const client = await this.clientEntity.findOne({
        where: { id: clientId },
      });
      debtSheet.client = client;

      const bank = await this.bankEntity.findOne({
        where: { id: bankId },
      });
      debtSheet.bank = bank;

      const workbook = XLSX.readFile(file.path);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const excelData = XLSX.utils.sheet_to_json(sheet);

      // Create debt sheet
      await this.debtSheetRepository.save(debtSheet);

      // Create a promise returning the text: "Debt sheet uploaded successfully, and it is being processed.", then process the debt sheet in the background
      new Promise((resolve) => {
        resolve('Debt sheet uploaded successfully, and it is being processed.');
      }).then(() => {
        /* Aca habria que hacer el update al archivo */
        this.processDebtSheet(excelData, debtSheet);
      });

      return 'Debt sheet uploaded successfully, and it is being processed.';
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  /*
   * Procesado del archivo Excel
   */
  public async processDebtSheet(excelData: any, debtSheet: DebtSheetsEntity) {
    const debtors = [];
    const accounts = [];
    const debts = [];
    const repeatedDebts = [];

    for (const row of excelData) {
      const debtId = row['Id_adherente'];
      const existingDebt = await this.debtRepository.findOne({ where: { idDebt: debtId } });
      if (existingDebt) {
        repeatedDebts.push(existingDebt);
        continue;
      }
      // Search/Create debtor
      let debtor: DebtorEntity;
      const checkDebtor = await this.debtorRepository.findOne({
        where: { dni: row['DNI'] },
      });

      if (checkDebtor) {
        debtor = checkDebtor;
      } else {
        debtor = new DebtorEntity();
        debtor.dni = row['DNI'];
        debtor.lastNames = row['APELLIDOS'].toUpperCase();
        debtor.firstNames = row['NOMBRES'].toUpperCase();

        debtors.push(debtor);
      }

      // Search/Create account
      let account: AccountEntity;
      const checkAccount = await this.accountRepository.findOne({
        where: { acctNumber: row['Cuenta'] },
      });

      if (checkAccount) {
        account = checkAccount;
      } else {
        account = new AccountEntity();
        account.acctNumber = row['Cuenta'];
        account.branch = row['Sucursal'];
        account.exchangeType = row['Moneda'];
        account.type = row['Tipo_cuenta'];
        account.debtor = debtor;

        // account = await this.accountRepository.save(account);
        accounts.push(account);
      }

      // Search/Create debt
      const debt = new DebtEntity();
      debt.amount = parseInt(row['Importe']) / 100;
      debt.idDebt = row['Id_adherente'];
      debt.dueDate = row['Fecha_vto'];
      debt.account = account;
      debt.debtSheet = debtSheet;

      // await this.debtRepository.save(debt);
      debts.push(debt);
    }

    await Promise.all([
      this.debtorRepository.save(debtors),
      this.accountRepository.save(accounts),
      this.debtRepository.save(debts),
      this.repeatedDebtRepository.save(repeatedDebts),
    ]);

    return 'Debts have been processed successfully.';
  }

  async getAllDebts(paginationQuery: PaginationQueryDto) {
    const { limit, offset, sortBy, sortOrder, filterBy, filterValue, date, startDate, endDate } =
      paginationQuery;
    let queryBuilder = this.debtRepository.createQueryBuilder('debt');

    if (filterBy && filterValue) {
      queryBuilder = queryBuilder.where(`debt.${filterBy} = :filterValue`, { filterValue });
    }

    if (startDate && endDate) {
      if (date && ['createdAt', 'updatedAt', 'dueDate'].includes(date)) {
        queryBuilder = queryBuilder.andWhere(
          `debt.${date} >= :startDate AND debt.${date} <= :endDate`,
          { startDate, endDate }
        );
      } else {
        throw new BadRequestException('Invalid date field specified for filtering');
      }
    }

    if (sortBy && sortOrder) {
      const order = {};
      order[`debt.${sortBy}`] = sortOrder.toUpperCase();
      queryBuilder = queryBuilder.orderBy(order);
    }

    if (limit) {
      queryBuilder = queryBuilder.limit(limit).offset(offset ?? 0);
    }

    const debts = await queryBuilder.getMany();
    return debts;
  }
}

// {
//     'N°empresa sueldo': 0,
//     Tipo_Banco: 285,
//     Sucursal: 202,
//     Tipo_cuenta: 4,
//     Cuenta: 420209464635995,
//     Id_adherente: '2850202340094646359958',
//     Id_debito: 'SJVELAZQUEZMARIACRISTINA',
//     Fecha_vto: 20230914,
//     Moneda: 80,
//     Importe: 4500000,
//     DNI: 25780292,
//     NOMBRES: 'VELAZQUEZ MARIA CRISTINA',
//     APELLIDOS: 'VELAZQUEZ MARIA CRISTINA',
//     dni: 1120346,
//     score: 0.07566826578979396
//   },
