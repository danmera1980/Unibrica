import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DebtorEntity } from 'src/debts/entities/debtors.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DebtorsService {
  constructor(
    @InjectRepository(DebtorEntity)
    private readonly debtorRepository: Repository<DebtorEntity>
  ) {}

  async findAll(): Promise<DebtorEntity[]> {
    return await this.debtorRepository.find();
  }

  async findOne(id: number): Promise<DebtorEntity> {
    return await this.debtorRepository.findOne({ where: { id: String(id) } });
  }

  async create(debtorData: Partial<DebtorEntity>): Promise<DebtorEntity> {
    const debtor = this.debtorRepository.create(debtorData);
    return await this.debtorRepository.save(debtor);
  }

  async update(id: number, debtorData: Partial<DebtorEntity>): Promise<DebtorEntity> {
    await this.debtorRepository.update(id, debtorData);
    return await this.debtorRepository.findOne({ where: { id: String(id) } });
  }

  async remove(id: number): Promise<void> {
    await this.debtorRepository.delete(id);
  }
}
