import { IsDateString, IsNotEmpty } from 'class-validator';

export class DebtSheetDTO {
  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
