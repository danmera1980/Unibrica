import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PermissionDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class PermissionUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;
}
