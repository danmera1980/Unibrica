import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AttendanceService } from '../services/attendance.service'
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags('Attendance')
@UseGuards(AuthGuard)
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  toggleAttendance(@Req() request:Request) {
    return this.attendanceService.toggleAttendance(request.idUser);
  }

  @Get()
  findAll(@Req() request:Request) {
    return this.attendanceService.findOneByUser(request.idUser);
  }
/* 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceService.findOne(id);
  } */

/*   @Patch()
  update() {
    return this.attendanceService.update();
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceService.remove(id);
  }
}
