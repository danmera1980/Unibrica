import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttemptEntity } from '../entities/attempts.entity';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { AttemptDTO } from '../dto/attempt.dto';

@Injectable()
export class AttemptsService {
  constructor(
    @InjectRepository(AttemptEntity) private readonly attemptRepository: Repository<AttemptEntity>
  ) {}

  public async processSheet(body: AttemptDTO): Promise<AttemptEntity> {
    try {
      const newAttempt = new AttemptEntity();
      newAttempt.amount = body.amount;
      newAttempt.total = body.total;
      newAttempt.date = body.date;
      newAttempt.bank = body.bank;
      newAttempt.branch = body.branch;

      const attempt: AttemptEntity = await this.attemptRepository.save(newAttempt);

      return attempt;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
