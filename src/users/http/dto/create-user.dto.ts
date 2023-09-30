import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Nome do usuário' })
  @IsString({ message: 'O campo "nome" deve ser um texto' })
  @IsNotEmpty({ message: 'O campo "nome" é obrigatório' })
  name: string;

  @ApiProperty({ description: 'Email do usuário' })
  @IsString({ message: 'O campo "email" deve ser um texto' })
  @IsNotEmpty({ message: 'O campo "email" é obrigatório' })
  @IsEmail({}, { message: 'O campo "email" deve ser um email válido' })
  email: string;

  @ApiProperty({ description: 'Senha do usuário' })
  @IsNotEmpty({ message: 'O campo "senha" é obrigatório' })
  @IsString({ message: 'O campo "senha" deve ser um texto' })
  password: string;
}
