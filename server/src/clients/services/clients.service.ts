import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientDTO } from 'src/clients/dto/client.dto';
import { ClientEntity } from 'src/clients/entities/clients.entity';
import { ErrorManager } from 'src/utils/error.manager';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity) private readonly clientRepository: Repository<ClientEntity>
  ) {}

  public async newClient(body: ClientDTO): Promise<ClientEntity> {
    try {
      const newClient = new ClientEntity();
      newClient.clientId = body.clientId;
      newClient.name = body.name;
      const client: ClientEntity = await this.clientRepository.save(newClient);

      if (!client) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Could Not Create Client' });
      }

      return client;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async getAllClients(): Promise<ClientEntity[]> {
    try {
      const clients: ClientEntity[] = await this.clientRepository.find();

      if (!clients) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Could Not Find Clients' });
      }

      return clients;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
