import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderStatusDto {
  @ApiProperty({ description: 'Novo Status da assinatura' })
  @IsString({ message: 'Novo Status da assinatura deve ser um texto' })
  @IsNotEmpty({ message: 'O campo "userId" é obrigatório' })
  status: number;
}
