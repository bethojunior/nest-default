import {
  HttpException,
  HttpStatus,
  Post,
  Body,
  UnauthorizedException,
  Controller,
  HttpCode,
} from '@nestjs/common';
import { AuthMiddlewareService } from 'src/http/middleware/auth/auth.middleware';
import { CreateUserDto } from 'src/http/dto/user/create-user.dto';
import { UserService } from 'src/services/user/user.service';
import { AuthService } from 'src/services/auth/auth.service';
import { LoginAuthDto } from 'src/http/dto/auth/login-auth.dto';

import * as dotenv from 'dotenv';

@Controller('auth')
export class AuthController {
  constructor(
    private auth: AuthMiddlewareService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginAuthDto: LoginAuthDto) {
    const user = await this.auth.validateUser(
      loginAuthDto.email,
      loginAuthDto.password,
    );

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const tokenObject = await this.auth.generateToken(user);
    user.token = tokenObject.access_token;

    return user;
  }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      if (user && 'id' in user) {
        const token = await this.auth.generateToken(user);
        // await this.sendMaiLWelcome(createUserDto.email, createUserDto.name);
        user.token = token.access_token;
        return user;
      } else {
        throw new Error('Erro ao criar usuário');
      }
    } catch (error) {
      throw new HttpException(
        'Failed to create user: ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
