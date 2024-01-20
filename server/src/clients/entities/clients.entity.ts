import { BaseEntity } from 'src/config/base.entity';
import { DebtSheetsEntity } from 'src/debts/entities/debtSheets.entity';
import { IClient } from 'src/interfaces/client.interfaces';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'clients' })
export class ClientEntity extends BaseEntity implements IClient {
  @Column()
  clientId: number;

  @Column()
  name: string;

  @OneToMany(() => DebtSheetsEntity, (debtSheet) => debtSheet.client)
  debtSheets: DebtSheetsEntity[];
}
