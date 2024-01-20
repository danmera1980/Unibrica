import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ClientDTO {
  @IsNumber()
  @IsNotEmpty()
  clientId: number;

  @IsString()
  name: string;
}
