import { BaseEntity } from 'src/config/base.entity';
import { IAccount } from 'src/interfaces/debt.interface';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { DebtorEntity } from './debtors.entity';
import { DebtEntity } from './debts.entity';

@Entity({ name: 'accounts' })
export class AccountEntity extends BaseEntity implements IAccount {
  @Column()
  branch: number;

  @Column()
  type: number;

  @Column()
  acctNumber: string;

  @Column()
  exchangeType: number;

  @OneToMany(() => DebtEntity, (debt) => debt.account)
  debts: DebtEntity[];

  @ManyToOne(() => DebtorEntity ,(debtor) => debtor.accounts)
  debtor: DebtorEntity;
}
