import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class SeederService {
  async seedEntityData<T>(data: T[], repository: Repository<T>, field: keyof T) {
    for (const item of data) {
      // This is a general service for seeding the tables. See request resource to understand how to use it.
      const criteria = { [field]: item[field] } as FindOptionsWhere<T>;
      const existingData = await repository.findOneBy(criteria);
      if (!existingData) {
        await repository.save(item);
      }
    }
  }
}
