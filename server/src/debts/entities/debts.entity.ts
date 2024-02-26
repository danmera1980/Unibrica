import { BaseEntity } from 'src/config/base.entity';
import { IDebt } from 'src/interfaces/debt.interface';
import { Column, Entity, ManyToOne } from 'typeorm';
import { DebtSheetsEntity } from './debtSheets.entity';
import { AccountEntity } from './accounts.entity';
import { DebtorEntity } from '../entities/debtors.entity';

@Entity({ name: 'debts' })
export class DebtEntity extends BaseEntity implements IDebt {
  @Column()
  idDebt: string;

  @Column()
  dueDate: Date;

  @Column({ type: 'float' })
  amount: number;

  @ManyToOne(() => DebtSheetsEntity, (debtSheet) => debtSheet.debts)
  debtSheet: DebtSheetsEntity;

  @ManyToOne(() => AccountEntity, (account) => account.debts)
  account: AccountEntity;

  @ManyToOne(() => DebtorEntity, (debtor) => debtor.debts)
  debtor: DebtorEntity;

  @Column()
  isPaid: boolean;
}
