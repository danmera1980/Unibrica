import { Body, Controller, Get, Post} from '@nestjs/common';
import { BanksService } from "../services/banks.service";
import { BankDTO } from '../dto/bank.dto';

@Controller('banks')
export class BanksController {
  constructor(private readonly bankService: BanksService) {}

  @Post('newBank')
  public async createBank(@Body() body: BankDTO) {
    return await this.bankService.createBank(body);
  }

  @Get('all')
  public async getAllBanks() {
    return await this.bankService.getAllBanks();
  }
}