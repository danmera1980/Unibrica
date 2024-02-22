import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';
import { DebtorEntity } from 'src/debts/entities/debtors.entity';
import { DebtorsService } from './services/debtors.service';
import { DebtorsController } from './controllers/debtors.controller';

@Module({
  imports: [MulterModule.register(multerConfig), TypeOrmModule.forFeature([DebtorEntity])],
  providers: [DebtorsService],
  controllers: [DebtorsController],
})
export class DebtorsModule {}
