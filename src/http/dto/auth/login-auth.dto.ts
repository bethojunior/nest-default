import { IsEmail, Length, IsString } from 'class-validator';

export class LoginAuthDto {
  @IsEmail({}, { message: 'O email deve ser um endereço de e-mail válido.' })
  readonly email: string;

  @IsString({ message: 'A senha deve ter no minimo 8 caracteres' })
  @Length(8, 20)
  readonly password: string;
}
