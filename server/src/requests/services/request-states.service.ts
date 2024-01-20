import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { RequestStateEntity } from '../entities/request-state.entity';
import { CreateRequestStateDto, UpdateRequestStateDto } from '../dto/request-states.dto';

import { ErrorManager } from 'src/utils/error.manager';
import { SeederService } from 'src/shared/seeder/seeder';
import { defaultRequestStates } from '../default-data';

@Injectable()
export class RequestStatesService {
  constructor(
    private readonly seederService: SeederService,
    @InjectRepository(RequestStateEntity)
    private readonly requestStateRepository: Repository<RequestStateEntity>
  ) {
    this.seedDatabase();
  }

  async create(createRequestStateDto: CreateRequestStateDto): Promise<RequestStateEntity> {
    try {
      if (createRequestStateDto.isDefault) {
        await this.requestStateRepository.update({ isDefault: true }, { isDefault: false });
      }
      const requestState = this.requestStateRepository.create(createRequestStateDto);
      return await this.requestStateRepository.save(requestState);
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async findAll(): Promise<RequestStateEntity[]> {
    try {
      return await this.requestStateRepository.find();
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async findOne(name: string): Promise<RequestStateEntity> {
    try {
      return await this.requestStateRepository.findOneBy({ name });
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async update(name: string, updateRequestStateDto: UpdateRequestStateDto): Promise<UpdateResult> {
    try {
      return await this.requestStateRepository.update(name, updateRequestStateDto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async remove(name: string): Promise<DeleteResult> {
    try {
      return await this.requestStateRepository.delete(name);
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  private async seedDatabase() {
    await this.seederService.seedEntityData(
      defaultRequestStates,
      this.requestStateRepository,
      'name'
    );
  }
}
