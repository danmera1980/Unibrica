import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AttemptDTO } from '../dto/attempt.dto';
import { AttemptsService } from '../services/attempts.service';

@Controller('attempts')
@UseGuards(AuthGuard)
export class AttemptsController {
  constructor(private readonly attemptsService: AttemptsService) {}

  @Post('sheet')
  public async processSheet(@Body() body: AttemptDTO) {
    return await this.attemptsService.processSheet(body);
  }

  @Get('test')
  public async test() {
    return 'test';
  }
}
