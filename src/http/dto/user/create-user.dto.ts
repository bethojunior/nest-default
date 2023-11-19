import { IsEmail, IsNotEmpty, Length } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Email é obrigatório' })
  name: string;

  @Length(11, 12)
  @IsNotEmpty({ message: 'Telefone é obrigatóro e maior de 11 caracteres' })
  phone: string;

  @IsNotEmpty({ message: 'oab é obrigatóro' })
  @IsNotEmpty()
  oab: string;

  @IsNotEmpty({ message: 'RG é obrigatóro' })
  @IsNotEmpty()
  rg: string;

  @IsNotEmpty({ message: 'Cpf é obrigatóro' })
  @IsNotEmpty()
  cpf: string;

  @Length(8, 20)
  @IsNotEmpty({ message: 'Senha é obrigatóro e maior de 8 caracteres' })
  password: string;
}
