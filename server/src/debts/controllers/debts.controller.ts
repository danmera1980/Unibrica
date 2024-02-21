import {
  Body,
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { DebtsService } from '../services/debts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('debts')
export class DebtsController {
  constructor(private readonly debtsService: DebtsService) {}

  @Post('uploadDebtSheet')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadDebtSheet(
    @UploadedFile() file: Express.Multer.File,
    @Body('userId') userId: string,
    @Body('clientId') clientId: string,
    @Body('bankId') bankId: string
  ): Promise<void> {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    return await this.debtsService.uploadDebtSheet(file, userId, clientId, bankId);
  }
}
