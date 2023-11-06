import { Module } from '@nestjs/common';
import { UserModule } from '../http/modules/user.module';
import { MailModule } from '../providers/mail/email.module';

@Module({
  imports: [UserModule, MailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
