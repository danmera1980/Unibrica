import { Module } from '@nestjs/common';
import { AttendanceService } from './services/attendance.service';
import { AttendanceController } from './controllers/attendance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceEntity } from './entities/attendance.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([AttendanceEntity]), UsersModule],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
