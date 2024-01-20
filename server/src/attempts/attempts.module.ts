import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttemptsController } from './controllers/attempts.controller';
import { AttemptsService } from './services/attempts.service';
import { AttemptEntity } from './entities/attempts.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([AttemptEntity]), UsersModule],
  providers: [AttemptsService],
  controllers: [AttemptsController],
  exports: [AttemptsService, TypeOrmModule],
})
export class AttemptsModule {}
