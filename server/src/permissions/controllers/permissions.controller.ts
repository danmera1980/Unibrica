import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PermissionsService } from '../services/permissions.service';
import { PermissionDTO, PermissionUpdateDTO } from '../dto/permission.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post('create')
  public async createPermission(@Body() body: PermissionDTO) {
    return await this.permissionsService.createPermission(body);
  }

  @Get('all')
  public async findAllPermissions() {
    return await this.permissionsService.findPermissions();
  }

  @Get(':id')
  public async findPermissionById(@Param('id') id: string) {
    return await this.permissionsService.findPermissionById(id);
  }

  @Put('edit/:id')
  public async updatePermission(@Param('id') id: string, @Body() body: PermissionUpdateDTO) {
    return await this.permissionsService.updatePermissionById(id, body);
  }

  @Delete('delete/:id')
  public async deletePermissionById(@Param('id') id: string) {
    return await this.permissionsService.deletePermissionById(id);
  }
}
