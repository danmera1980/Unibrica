import { Injectable } from '@nestjs/common';
import { CreateBreakDto, UpdateBreakDto } from '../dto/create-break.dto';

@Injectable()
export class BreaksService {
  create(createBreakDto: CreateBreakDto) {
    return 'This action adds a new break';
  }

  findAll() {
    return `This action returns all breaks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} break`;
  }

  update(id: number, updateBreakDto: UpdateBreakDto) {
    return `This action updates a #${id} break`;
  }

  remove(id: number) {
    return `This action removes a #${id} break`;
  }
}
