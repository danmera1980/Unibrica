import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BreaksService } from '../services/breaks.service';
import { CreateBreakDto, UpdateBreakDto} from '../dto/create-break.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Breaks')
@Controller('breaks')
export class BreaksController {
  constructor(private readonly breaksService: BreaksService) {}

  @Post()
  create(@Body() createBreakDto: CreateBreakDto) {
    return this.breaksService.create(createBreakDto);
  }

  @Get()
  findAll() {
    return this.breaksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breaksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBreakDto: UpdateBreakDto) {
    return this.breaksService.update(+id, updateBreakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breaksService.remove(+id);
  }
}
