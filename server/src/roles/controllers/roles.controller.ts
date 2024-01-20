import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { RoleDTO, RolePermissionDTO, RoleUpdateDTO } from '../dto/role.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post('create')
  public async createRole(@Body() body: RoleDTO) {
    return await this.rolesService.createRole(body);
  }

  @Post('add-permission')
  public async addPermissionToRole(@Body() body: RolePermissionDTO) {
    return await this.rolesService.addPermissionToRole(body);
  }

  @Get('all')
  public async findAllRoles() {
    return await this.rolesService.findRoles();
  }

  @Get(':id')
  public async findRoleById(@Param('id') id: string) {
    return await this.rolesService.findRoleById(id);
  }

  @Put('edit/:id')
  public async updateRoleById(@Param('id') id: string, @Body() body: RoleUpdateDTO) {
    return await this.rolesService.updateRoleById(id, body);
  }

  @Delete('delete/:id')
  public async deleteRoleById(@Param('id') id: string) {
    return await this.rolesService.deleteRoleById(id);
  }
}
