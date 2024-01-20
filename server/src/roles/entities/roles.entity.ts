import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IRole } from '../../interfaces/role.interface';
import { RolesPermissionsEntity } from './rolesPermissions.entity';
import { UserEntity } from 'src/users/entities/users.entity';

@Entity({ name: 'roles' })
export class RoleEntity extends BaseEntity implements IRole {
  @Column()
  name: string;

  @OneToMany(() => UserEntity, (user) => user.role)
  user: UserEntity[];

  @OneToMany(() => RolesPermissionsEntity, (rolesProjects) => rolesProjects.role)
  permissionsIncludes: RolesPermissionsEntity[];
}
