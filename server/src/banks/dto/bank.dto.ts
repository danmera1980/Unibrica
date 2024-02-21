import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class BankDTO {
  @IsNotEmpty()
  @IsString()
  bankId: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
