import { Injectable } from '@nestjs/common';
import { CreateRequestDto, UpdateRequestDto } from '../dto/requests.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestEntity } from '../entities/request.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { RequestTypeEntity } from '../entities/request-type.entity';
import { RequestStateEntity } from '../entities/request-state.entity';
import { ErrorManager } from 'src/utils/error.manager';
import { UserEntity } from 'src/users/entities/users.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(RequestEntity) private readonly requestRepository: Repository<RequestEntity>,
    @InjectRepository(RequestTypeEntity)
    private readonly requestTypeRepository: Repository<RequestTypeEntity>,
    @InjectRepository(RequestStateEntity)
    private readonly requestStateRepository: Repository<RequestStateEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {}

  async create(createRequestDto: CreateRequestDto, userID: string): Promise<RequestEntity> {
    try {
      const request = new RequestEntity();
      request.date = createRequestDto.date;
      request.description = createRequestDto.description;
      request.comments = '';

      request.user = await this.findUser(userID);
      request.type = await this.findRequestType(createRequestDto.type_name);
      request.state = await this.findRequestState();

      if (createRequestDto.comments) {
        request.comments = createRequestDto.comments;
      }

      const savedRequest = await this.requestRepository.save(request);
      if (!savedRequest) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: "Request couldn't be saved" });
      }

      return savedRequest;
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async findAll(userID: string): Promise<RequestEntity[]> {
    try {
      const requests = await this.requestRepository.find({
        where: { user: { id: userID } },
        relations: { state: true, type: true },
        select: { description: true, date: true, comments: true },
      });
      return requests;
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async findOne(id: string, userID: string): Promise<RequestEntity> {
    try {
      const request = await this.requestRepository.findOneBy({ id, user: { id: userID } });
      return request;
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async update(
    id: string,
    updateRequestDto: UpdateRequestDto,
    userID: string
  ): Promise<UpdateResult | undefined> {
    try {
      const role: UpdateResult = await this.requestRepository.update(
        { id, user: { id: userID } },
        updateRequestDto
      );
      if (!role.affected) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Update Failed' });
      }
      return role;
    } catch (error) {
      throw ErrorManager.createSignatureError(error);
    }
  }

  async remove(id: string, userID: string): Promise<DeleteResult | undefined> {
    try {
      const role: DeleteResult = await this.requestRepository.delete({ id, user: { id: userID } });
      if (role.affected === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Delete Failed' });
      }
      return role;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  private async findUser(userID: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id: userID });
    if (!user) {
      throw new ErrorManager({ type: 'BAD_REQUEST', message: 'User not found' });
    }
    return user;
  }

  private async findRequestState(): Promise<RequestStateEntity> {
    const requestState = await this.requestStateRepository.findOneBy({ isDefault: true });
    if (!requestState) {
      throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Request state not found' });
    }
    return requestState;
  }

  private async findRequestType(typeID: string): Promise<RequestTypeEntity> {
    const requestType = await this.requestTypeRepository.findOneBy({ id: typeID });
    if (!requestType) {
      throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Request type not found' });
    }
    return requestType;
  }
}
