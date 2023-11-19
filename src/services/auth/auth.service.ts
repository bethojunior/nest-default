import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../../http/dto/auth/create-auth.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
}
