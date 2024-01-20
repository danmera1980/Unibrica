import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ClientDTO } from '../dto/client.dto';
import { ClientsService } from 'src/clients/services/clients.service';

@Controller('clients')
@UseGuards(AuthGuard)
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Post('newClient')
  public async newClient(@Body() body: ClientDTO) {
    return await this.clientService.newClient(body);
  }

  @Get('all')
  public async getAllClients() {
    return await this.clientService.getAllClients();
  }
}
