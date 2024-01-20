import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from '../entities/roles.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { RoleDTO, RolePermissionDTO, RoleUpdateDTO } from '../dto/role.dto';
import { ErrorManager } from 'src/utils/error.manager';
import { RolesPermissionsEntity } from '../entities/rolesPermissions.entity';
import { SeederService } from 'src/shared/seeder/seeder';
// import { RolesPermissionsEntity } from '../entities/rolesPermissions.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity) private readonly roleRepository: Repository<RoleEntity>,
    @InjectRepository(RolesPermissionsEntity)
    private readonly rolesPermissionsRepository: Repository<RolesPermissionsEntity>,
    private readonly seederService: SeederService
  ) {
    this.initRoles();
  }

  public async createRole(body: RoleDTO): Promise<RoleEntity> {
    try {
      const role = await this.roleRepository.save(body);
      if (!role) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Could Not Create Role' });
      }
      return role;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findRoles(): Promise<RoleEntity[]> {
    try {
      const roles: RoleEntity[] = await this.roleRepository.find();
      if (roles.length === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Results not found' });
      }
      return roles;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findRoleById(id: string): Promise<RoleEntity> {
    try {
      const role: RoleEntity = await this.roleRepository
        .createQueryBuilder('role')
        .where({ id })
        .leftJoinAndSelect('role.permissionsIncludes', 'permissionsIncludes')
        .leftJoinAndSelect('permissionsIncludes.permission', 'permission')
        .getOne();
      if (!role) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Result not found' });
      }
      return role;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async addPermissionToRole(body: RolePermissionDTO) {
    try {
      const rolePermission: RolesPermissionsEntity = await this.rolesPermissionsRepository.save(
        body
      );
      if (!rolePermission) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Relation Not Created' });
      }
      return rolePermission;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateRoleById(id: string, body: RoleUpdateDTO): Promise<UpdateResult | undefined> {
    try {
      const role: UpdateResult = await this.roleRepository.update(id, body);
      if (role.affected === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Update Failed' });
      }
      return role;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteRoleById(id: string): Promise<DeleteResult | undefined> {
    try {
      const role: DeleteResult = await this.roleRepository.delete(id);
      if (role.affected === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Delete Failed' });
      }
      return role;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  private async initRoles() {

    const roles = [
      {
        name: 'Admin',
      },
      {
        name: 'User',
      }
    ]

    this.seederService.seedEntityData(roles, this.roleRepository, 'name');
  }
}
