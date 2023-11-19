import { PrismaClient, User } from '@prisma/client';
import { FileUploads3 } from '../../contracts/fileUploadS3';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/http/dto/user/create-user.dto';

const prismaClient = new PrismaClient();
export class UserRepository {
  constructor(private readonly fileUploadS3: FileUploads3) {}

  async destroy(id: string): Promise<User | Error> {
    try {
      return await prismaClient.user.delete({ where: { id: id } });
    } catch (error) {
      throw new Error('Erro excluir usuário: ' + error.message);
    }
  }

  async findAll(): Promise<User[] | Error> {
    try {
      return await prismaClient.user.findMany();
    } catch (error) {
      throw new Error('Erro buscar usuários: ' + error.message);
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User | Error> {
    const existingUser = await prismaClient.user.findFirst({
      where: { email: createUserDto.email },
    });

    if (existingUser) throw new Error('Email já existe em nossa base de dados');

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;

    try {
      return await prismaClient.user.create({
        data: {
          ...createUserDto,
        },
      });
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }
}
