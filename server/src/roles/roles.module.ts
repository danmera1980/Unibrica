import { Module } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesController } from './controllers/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './entities/roles.entity';
import { RolesPermissionsEntity } from './entities/rolesPermissions.entity';
import { SeederService } from 'src/shared/seeder/seeder';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity, RolesPermissionsEntity])],
  providers: [RolesService, SeederService],
  controllers: [RolesController],
})
export class RolesModule {}
