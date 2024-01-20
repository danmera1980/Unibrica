import { Module } from '@nestjs/common';
import { PermissionsController } from './controllers/permissions.controller';
import { PermissionsService } from './services/permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsEntity } from './entities/permissions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionsEntity])],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
