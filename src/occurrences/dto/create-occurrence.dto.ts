import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

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
  userId: number; // só o ID do usuário
}
