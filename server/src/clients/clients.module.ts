import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './entities/clients.entity';
import { ClientsService } from 'src/clients/services/clients.service';
import { ClientsController } from './controllers/clients.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity]), UsersModule],
  providers: [ClientsService],
  controllers: [ClientsController],
  exports: [ClientsService, TypeOrmModule],
})
export class ClientsModule {}
