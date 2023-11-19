import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AuthMiddlewareService {
  prismaClient = new PrismaClient();
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) return null;

    const userWithGender = await this.prismaClient.user.findUnique({
      where: {
        id: user.id,
      },
    });

    return userWithGender;
  }

  async generateToken(user: User) {
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }
}
