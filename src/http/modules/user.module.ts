import { Module } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { UserController } from '../controllers/user/user.controller';
import { UserRepository } from 'src/repositories/user/userRepository';
import { FileUploads3 } from 'src/contracts/fileUploadS3';
import { EmailContract } from 'src/contracts/mailer/mailContract';
import { MailModule } from 'src/providers/mail/email.module';
import { AuthController } from '../controllers/auth/auth.controller';
import { AuthMiddlewareService } from '../middleware/auth/auth.middleware';
import { AuthService } from 'src/services/auth/auth.service';
import { JwtStrategy } from 'src/providers/jwt/jwt.strategy,provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UserController, AuthController],
  providers: [
    AuthController,
    AuthMiddlewareService,
    AuthService,
    UserService,
    UserRepository,
    FileUploads3,
    EmailContract,
    MailModule,
    JwtStrategy,
    JwtService,
  ],
})
export class UserModule {}
