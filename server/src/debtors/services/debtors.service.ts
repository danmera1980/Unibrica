import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/debts/controllers/debts.controller';
import { DebtorEntity } from 'src/debts/entities/debtors.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DebtorsService {
  constructor(
    @InjectRepository(DebtorEntity)
    private readonly debtorRepository: Repository<DebtorEntity>
  ) {}

  async findAll(
    paginationQuery: PaginationQueryDto
  ): Promise<{ debtors: DebtorEntity[]; totalItems: number }> {
    const { limit, offset, sortBy, sortOrder, filterBy, filterValue, date, startDate, endDate } =
      paginationQuery;
    let queryBuilder = this.debtorRepository.createQueryBuilder('debtor');

    if (filterBy && filterValue) {
      queryBuilder = queryBuilder.where(`debtor.${filterBy} = :filterValue`, { filterValue });
    }

    if (startDate && endDate) {
      if (date && ['createdAt', 'updatedAt', 'dueDate'].includes(date)) {
        queryBuilder = queryBuilder.andWhere(
          `debtor.${date} >= :startDate AND debtor.${date} <= :endDate`,
          { startDate, endDate }
        );
      } else {
        throw new BadRequestException('Invalid date field specified for filtering');
      }
    }

    // Copia la consulta principal para contar el número total de elementos
    let totalItemsQueryBuilder = this.debtorRepository.createQueryBuilder('debtor');

    if (filterBy && filterValue) {
      totalItemsQueryBuilder = totalItemsQueryBuilder.where(`debtor.${filterBy} = :filterValue`, {
        filterValue,
      });
    }

    if (startDate && endDate) {
      if (date && ['createdAt', 'updatedAt', 'dueDate'].includes(date)) {
        totalItemsQueryBuilder = totalItemsQueryBuilder.andWhere(
          `debtor.${date} >= :startDate AND debtor.${date} <= :endDate`,
          { startDate, endDate }
        );
      } else {
        throw new BadRequestException('Invalid date field specified for filtering');
      }
    }

    // Ejecuta la consulta para obtener el total de elementos
    const totalItems = await totalItemsQueryBuilder.getCount();

    if (sortBy && sortOrder) {
      const order = {};
      order[`debtor.${sortBy}`] = sortOrder.toUpperCase();
      queryBuilder = queryBuilder.orderBy(order);
    }

    if (limit) {
      queryBuilder = queryBuilder.limit(limit).offset(offset ?? 0);
    }

    const debtors = await queryBuilder.getMany();

    console.log('DEBTORS: ', debtors);
    // Retorna los datos de las deudas junto con el total de elementos
    return { debtors, totalItems };
    // return await this.debtorRepository.find();
  }

  async findOne(id: string): Promise<DebtorEntity> {
    return await this.debtorRepository.findOne({ where: { id: String(id) } });
  }

  async create(debtorData: Partial<DebtorEntity>): Promise<DebtorEntity> {
    const debtor = this.debtorRepository.create(debtorData);
    return await this.debtorRepository.save(debtor);
  }

  async update(id: number, debtorData: Partial<DebtorEntity>): Promise<DebtorEntity> {
    await this.debtorRepository.update(id, debtorData);
    return await this.debtorRepository.findOne({ where: { id: String(id) } });
  }

  async remove(id: number): Promise<void> {
    await this.debtorRepository.delete(id);
  }
}
