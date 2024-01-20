import { Module } from '@nestjs/common';
import { RequestsService } from './services/requests.service';
import { RequestsController } from './controllers/requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestEntity } from './entities/request.entity';
import { RequestTypeEntity } from './entities/request-type.entity';
import { RequestStateEntity } from './entities/request-state.entity';
import { UsersModule } from 'src/users/users.module';
import { SeederService } from 'src/shared/seeder/seeder';
import { RequestStatesController } from './controllers/request-states.controller';
import { RequestTypesController } from './controllers/request-types.controller';
import { RequestStatesService } from './services/request-states.service';
import { RequestTypesService } from './services/request-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity, RequestTypeEntity, RequestStateEntity]), UsersModule],
  controllers: [RequestsController, RequestStatesController, RequestTypesController],
  providers: [RequestsService, RequestStatesService, RequestTypesService, SeederService]
})
export class RequestsModule {}
