import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IPermission } from '../../interfaces/permission.interface';
import { RolesPermissionsEntity } from '../../roles/entities/rolesPermissions.entity';

@Entity({ name: 'permissions' })
export class PermissionsEntity extends BaseEntity implements IPermission {
  @Column()
  name: string;

  @OneToMany(() => RolesPermissionsEntity, (rolesProjects) => rolesProjects.permission)
  rolesIncludes: RolesPermissionsEntity[];
}
