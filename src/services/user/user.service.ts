import { Injectable } from '@nestjs/common';
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
      await this.userRepository.create(createUserDto);

      await this.emailContract.sendEmail(createUserDto.email, 'Welcome', 'olá');
    } catch (error) {
      return error.message;
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

  remove(id: string) {
    return id;
    // return this.userRepository.destroy(id);
  }
}
