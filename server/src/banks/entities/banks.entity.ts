import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { DebtSheetsEntity } from '../../debts/entities/debtSheets.entity';
import { IBank } from 'src/interfaces/bank.interfaces';

@Entity({ name: 'banks' })
export class BankEntity extends BaseEntity implements IBank {
  @Column()
  bankId: string;

  @Column()
  name: string;

  @OneToMany(() => DebtSheetsEntity, (debtSheet) => debtSheet.bank)
  debtSheets: DebtSheetsEntity[];
}
