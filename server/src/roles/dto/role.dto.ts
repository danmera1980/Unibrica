import { IsNotEmpty, IsOptional, IsString, IsUUID, IsBoolean } from 'class-validator';
import { RoleEntity } from '../entities/roles.entity';
import { PermissionsEntity } from 'src/permissions/entities/permissions.entity';

export class RoleDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class RoleUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;
}

export class RolePermissionDTO {
  @IsNotEmpty()
  @IsUUID()
  role: RoleEntity;

  @IsNotEmpty()
  @IsUUID()
  permission: PermissionsEntity;

  @IsNotEmpty()
  @IsBoolean()
  given: boolean;
}
