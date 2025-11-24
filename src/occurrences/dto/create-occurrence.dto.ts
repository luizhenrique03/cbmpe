import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOccurrenceDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  local: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsOptional() // torna opcional se o front não enviar
  prioridade?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
