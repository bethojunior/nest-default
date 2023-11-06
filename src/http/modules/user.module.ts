import { Module } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { UserController } from '../controllers/user/user.controller';
import { UserRepository } from 'src/repositories/user/userRepository';
import { FileUploads3 } from 'src/contracts/fileUploadS3';
import { EmailContract } from 'src/contracts/mailer/mailContract';
import { MailModule } from 'src/providers/mail/email.module';
@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    FileUploads3,
    EmailContract,
    MailModule,
  ],
})
export class UserModule {}
