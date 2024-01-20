import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { PublicAccess } from 'src/auth/decorator/public.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
 @PublicAccess()
  @Post('register')
  public async registerUser(@Body() body: UserDTO) {
    return await this.usersService.createUser(body);
  }

  @Get('all')
  public async findAllUsers() {
    return await this.usersService.findAllUsers();
  }

  @PublicAccess()
  @Get(':id')
  public async findUserById(@Param('id') id: string) {
    return await this.usersService.findUserById(id);
  }

  @Put('edit/:id')
  public async updateUserById(@Param('id') id: string, @Body() body: UserUpdateDTO) {
    return await this.usersService.updateUserById(id, body);
  }

  @Delete('delete/:id')
  public async deleteUserById(@Param('id') id: string) {
    return await this.usersService.deleteUserById(id);
  }
}
