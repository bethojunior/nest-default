import { Controller } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import manageDate from 'src/helpers/manageDate';
import { User } from '@prisma/client';
import { FileUploads3 } from '../../contracts/fileUploadS3';

const prismaClient = new PrismaClient();
export class UserRepository {
  constructor(private readonly fileUploadS3: FileUploads3) {}
  async delete(id: string) {
    return await prismaClient.user.delete({ where: { id: id } });
  }

  async findAll() {
    return await prismaClient.user.findMany();
  }

  async create(body): Promise<User | Error> {
    const existingUser = await prismaClient.user.findFirst({
      where: { email: body.email },
    });

    if (existingUser) throw new Error('Email already exists');

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const gender = await prismaClient.gender.findFirst({
      where: { id: body.gender_id },
    });

    if (!gender) throw new Error('Gender not found');

    try {
      return await prismaClient.user.create({
        data: {
          ...body,
          password: hashedPassword,
          birthday: manageDate(body.birthday),
          gender_id: gender.id,
        },
      });
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }
}
