import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailContract {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(email: string, subject: string, message: string) {
    await this.mailerService.sendMail({
      to: email,
      subject,
      template: 'email',
      context: {
        message,
      },
    });
  }
}
