import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { RoleEntity } from './roles.entity';
import { PermissionsEntity } from '../../permissions/entities/permissions.entity';

@Entity({ name: 'roles_permissions' })
export class RolesPermissionsEntity extends BaseEntity {
  @Column()
  given: boolean;

  @ManyToOne(() => RoleEntity, (role) => role.permissionsIncludes)
  role: RoleEntity;

  @ManyToOne(() => PermissionsEntity, (permission) => permission.rolesIncludes)
  permission: PermissionsEntity;
}
