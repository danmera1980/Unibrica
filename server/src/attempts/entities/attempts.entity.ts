import { BaseEntity } from 'src/config/base.entity';
import { IAttempt } from '../../interfaces/attempt.interface';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'attempts' })
export class AttemptEntity extends BaseEntity implements IAttempt {
  @Column()
  amount: number;

  @Column()
  total: number;

  @Column()
  date: Date;

  @Column()
  bank: number;

  @Column()
  branch: number;
}
