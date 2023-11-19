import { Module } from '@nestjs/common';
import { UserModule } from '../http/modules/user.module';
import { MailModule } from '../providers/mail/email.module';
import { JwtModule } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { BullModule } from '@nestjs/bull';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    UserModule,
    MailModule,
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'importSupportersQueue',
    }),
    MulterModule.register({
      dest: process.env.PATH_UPLOADS,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_TIME },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
