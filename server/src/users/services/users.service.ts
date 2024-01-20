import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { ErrorManager } from 'src/utils/error.manager';
import { RoleEntity } from 'src/roles/entities/roles.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoleEntity) private readonly roleRepository: Repository<RoleEntity>
  ) {}

  public async createUser(body: UserDTO): Promise<UserEntity> {
    try {
      const newUser = new UserEntity();
      newUser.firstName = body.firstName;
      newUser.lastName = body.lastName;
      newUser.username = body.username;
      newUser.email = body.email;
      newUser.dob = body.dob;
      newUser.password = await bcrypt.hash(body.password, +process.env.HASH_SALT);

      if (body.role_id) {
        const role_id = body.role_id;
        const role: RoleEntity = await this.roleRepository.findOneBy({ id: role_id });

        if (!role) {
          throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Role Not Found' });
        }
        newUser.role = role;
      }
      const user: UserEntity = await this.userRepository.save(newUser);

      if (!user) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Could Not Create User' });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findBy({ key, value }: { key: keyof UserDTO; value: any }) {
    try {
      const user: UserEntity = await this.userRepository
        .createQueryBuilder('user')
        .addSelect('user.password')
        .where({ [key]: value })
        .getOne();
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAllUsers(): Promise<UserEntity[]> {
    try {
      const users: UserEntity[] = await this.userRepository.find({
        relations: {
          role: true,
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          dob: true,
          role: {
            id: true,
            name: true,
          },
        },
      });
      if (users.length === 0)
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Result not found' });
      return users;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findUserById(id: string): Promise<UserEntity> {
    try {
      const user: UserEntity = await this.userRepository
        .createQueryBuilder('user')
        .select([
          'user.id',
          'user.firstName',
          'user.lastName',
          'user.username',
          'user.email',
          'user.dob',
        ])
        .where({ id })
        .leftJoin('user.role', 'role')
        .addSelect(['role.id', 'role.name'])
        .getOne();
      if (!user) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Result not found' });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateUserById(id: string, body: UserUpdateDTO): Promise<UpdateResult | undefined> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, body);
      if (user.affected === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Update Failed' });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteUserById(id: string): Promise<DeleteResult | undefined> {
    try {
      const user: DeleteResult = await this.userRepository.delete(id);
      if (user.affected === 0) {
        throw new ErrorManager({ type: 'BAD_REQUEST', message: 'Delete Failed' });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
