import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionsEntity } from '../entities/permissions.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PermissionDTO, PermissionUpdateDTO } from '../dto/permission.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(PermissionsEntity)
    private readonly permissionRepository: Repository<PermissionsEntity>
  ) {}

  public async createPermission(body: PermissionDTO): Promise<PermissionsEntity> {
    try {
      const permission: PermissionsEntity = await this.permissionRepository.save(body);
      if (!permission) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Could Not Create Permission' });
      }
      return permission;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findPermissions(): Promise<PermissionsEntity[]> {
    try {
      const permissions: PermissionsEntity[] = await this.permissionRepository.find();
      if (permissions.length === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Result not found' });
      }
      return permissions;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findPermissionById(id: string): Promise<PermissionsEntity> {
    try {
      const permission: PermissionsEntity = await this.permissionRepository
        .createQueryBuilder('permission')
        .where({ id })
        .getOne();
      if (!permission) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Result not Found' });
      }
      return permission;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updatePermissionById(
    id: string,
    body: PermissionUpdateDTO
  ): Promise<UpdateResult | undefined> {
    try {
      const permission: UpdateResult = await this.permissionRepository.update(id, body);
      if (permission.affected === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Update Failed' });
      }
      return permission;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deletePermissionById(id: string): Promise<DeleteResult | undefined> {
    try {
      const permission: DeleteResult = await this.permissionRepository.delete(id);
      if (permission.affected === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Delete Failed' });
      }
      return permission;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
