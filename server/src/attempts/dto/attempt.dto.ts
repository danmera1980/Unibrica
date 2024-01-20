import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class AttemptDTO {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  bank: number;

  @IsNotEmpty()
  @IsNumber()
  branch: number;
}
