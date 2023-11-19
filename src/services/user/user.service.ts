import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user/userRepository';
import { Request } from 'express';
import { CreateUserDto } from '../../http/dto/user/create-user.dto';
import { EmailContract } from '../../contracts/mailer/mailContract';

@Injectable()
export class UserService {
  constructor(
    readonly userRepository: UserRepository,
    private readonly emailContract: EmailContract,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.userRepository.create(createUserDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, request: Request) {
    return `This action updates a #${id} user ${request}`;
  }

  async destroy(id: string) {
    try {
      return await this.userRepository.destroy(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
