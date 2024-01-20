import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateRequestTypeDto, UpdateRequestTypeDto } from '../dto/request-types.dto';
import { RequestTypesService } from '../services/request-types.service';

@ApiTags('Request Types')
@Controller('request-types')
@UseGuards(AuthGuard)
export class RequestTypesController {
  constructor(private readonly requestTypeService: RequestTypesService) {}

  @Post()
  create(@Body() createRequestTypeDto: CreateRequestTypeDto) {
    return this.requestTypeService.create(createRequestTypeDto);
  }

  @Get()
  findAll() {
    return this.requestTypeService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.requestTypeService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateRequestTypeDto: UpdateRequestTypeDto) {
    return this.requestTypeService.update(name, updateRequestTypeDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.requestTypeService.remove(name);
  }
}
