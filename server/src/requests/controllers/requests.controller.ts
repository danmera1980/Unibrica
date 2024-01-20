import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ExecutionContext } from '@nestjs/common';
import { RequestsService } from '../services/requests.service';
import { CreateRequestDto, UpdateRequestDto} from '../dto/requests.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Requests')
@Controller('requests')
@UseGuards(AuthGuard)
export class RequestsController {
  constructor(
    private readonly requestsService: RequestsService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto, @Req() request:Request) {
    return this.requestsService.create(createRequestDto, request.idUser);
  }

  @Get()
  findAll(@Req() request:Request) {
    return this.requestsService.findAll(request.idUser);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request:Request) {
    return this.requestsService.findOne(id, request.idUser);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto, @Req() request:Request) {
    return this.requestsService.update(id, updateRequestDto, request.idUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request:Request) {
    return this.requestsService.remove(id, request.idUser);
  }
}
