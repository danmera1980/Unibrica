import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DebtorsService } from '../services/debtors.service';
import { DebtorEntity } from 'src/debts/entities/debtors.entity';

@Controller('debtors')
export class DebtorsController {
  constructor(private readonly debtorsService: DebtorsService) {}

  @Get()
  async findAll(): Promise<DebtorEntity[]> {
    return this.debtorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DebtorEntity> {
    return this.debtorsService.findOne(+id);
  }

  @Post()
  async create(@Body() debtorData: Partial<DebtorEntity>): Promise<DebtorEntity> {
    return this.debtorsService.create(debtorData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() debtorData: Partial<DebtorEntity>
  ): Promise<DebtorEntity> {
    return this.debtorsService.update(+id, debtorData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.debtorsService.remove(+id);
  }
}
