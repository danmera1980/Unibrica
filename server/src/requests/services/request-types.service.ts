import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { RequestTypeEntity } from '../entities/request-type.entity';
import { CreateRequestTypeDto, UpdateRequestTypeDto } from '../dto/request-types.dto';

import { defaultRequestTypes } from '../default-data';
import { SeederService } from 'src/shared/seeder/seeder';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class RequestTypesService {
  constructor(
    private readonly seederService: SeederService,
    @InjectRepository(RequestTypeEntity)
    private readonly requestTypeRepository: Repository<RequestTypeEntity>
  ) {
    this.seedDatabase();
  }

  async create(createRequestTypeDto: CreateRequestTypeDto): Promise<RequestTypeEntity> {
    try {
      const requestType = this.requestTypeRepository.create(createRequestTypeDto);
      return await this.requestTypeRepository.save(requestType);
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async findAll(): Promise<RequestTypeEntity[]> {
    try {
      return await this.requestTypeRepository.find();
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async findOne(id: string): Promise<RequestTypeEntity> {
    try {
      return await this.requestTypeRepository.findOneBy({ id });
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async update(name: string, updateRequestTypeDto: UpdateRequestTypeDto): Promise<UpdateResult> {
    try {
      return await this.requestTypeRepository.update(name, updateRequestTypeDto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async remove(name: string): Promise<DeleteResult> {
    try {
      return await this.requestTypeRepository.delete(name);
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  private async seedDatabase() {
    await this.seederService.seedEntityData(
      defaultRequestTypes,
      this.requestTypeRepository,
      'name'
    );
  }
}
