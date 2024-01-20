import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from '../../config/base.entity';

import { IRequestState } from "src/interfaces/request.interfaces";

import { RequestEntity } from "./request.entity";

@Entity({ name: 'request_states' })
export class RequestStateEntity extends BaseEntity implements IRequestState {
  @Column()
  description: string;

  @Column({unique:true})
  name:string

  @Column()
  isDefault:boolean

  @OneToMany(() => RequestEntity, request => request.state)
  requests: RequestEntity[];
}