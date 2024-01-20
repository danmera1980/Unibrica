import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BreaksService } from './services/breaks.service';
import { BreaksController } from './controllers/breaks.controller';
import { BreakEntity } from './entities/break.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BreakEntity])],
  controllers: [BreaksController],
  providers: [BreaksService]
})
export class BreaksModule {}
