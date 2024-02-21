import { Module } from '@nestjs/common';
import { BankEntity } from './entities/banks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksService } from './services/banks.service';
import { BanksController } from './controllers/banks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity])],
  providers: [BanksService],
  controllers: [BanksController],
  exports: [BanksService, TypeOrmModule],
})
export class BanksModule {}
