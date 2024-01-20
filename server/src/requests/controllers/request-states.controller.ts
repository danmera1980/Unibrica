import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RequestStatesService } from '../services/request-states.service';
import { CreateRequestStateDto, UpdateRequestStateDto } from '../dto/request-states.dto';

@ApiTags('Request States')
@Controller('request-states')
@UseGuards(AuthGuard)
export class RequestStatesController {
  constructor(private readonly requestStateService: RequestStatesService) {}

  @Post()
  create(@Body() createRequestStateDto: CreateRequestStateDto) {
    return this.requestStateService.create(createRequestStateDto);
  }

  @Get()
  findAll() {
    return this.requestStateService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.requestStateService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateRequestStateDto: UpdateRequestStateDto) {
    return this.requestStateService.update(name, updateRequestStateDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.requestStateService.remove(name);
  }
}
