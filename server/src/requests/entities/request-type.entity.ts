import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from '../../config/base.entity';

import { IRequestType } from "src/interfaces/request.interfaces";

import { RequestEntity } from "./request.entity";

@Entity({ name: 'request_types' })
export class RequestTypeEntity extends BaseEntity implements IRequestType {
  @Column()
  description: string;

  @Column({unique:true})
  name:string

  @OneToMany(() => RequestEntity, request => request.type)
  requests: RequestEntity[];
}