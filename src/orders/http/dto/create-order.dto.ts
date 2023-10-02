import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ description: 'Id do produto' })
  @IsNumber({}, { message: 'O campo "productId" deve ser um número' })
  @IsNotEmpty({ message: 'O campo "productId" é obrigatório' })
  productId: number;

  @ApiProperty({ description: 'Valor da assinatura' })
  @IsNumber({}, { message: 'O campo "valor" deve ser um número' })
  @IsNotEmpty({ message: 'O campo "valor" é obrigatório' })
  value: number;

  @ApiProperty({ description: 'Documento do usuário' })
  @IsString({ message: 'Documento do usuário deve ser um texto' })
  @IsNotEmpty({ message: 'O campo "document" é obrigatório' })
  document: string;

  @ApiProperty({ description: 'Método de pagamento' })
  @IsString({ message: 'Método de pagamento deve ser um texto' })
  @IsNotEmpty({ message: 'O campo "payment" é obrigatório' })
  payment: string;
}
