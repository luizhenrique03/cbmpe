import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { OccurrencesService } from './occurrences.service';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { UpdateOccurrenceDto } from './dto/update-occurrence.dto';

@Controller('occurrences')
export class OccurrencesController {
  constructor(private readonly occurrencesService: OccurrencesService) {}

  // Criar ocorrência
  @Post()
  create(@Body() data: CreateOccurrenceDto) {
    return this.occurrencesService.create(data);
  }

  // Listar todas ocorrências
  @Get()
  findAll() {
    return this.occurrencesService.findAll();
  }

  // Buscar ocorrência por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.occurrencesService.findOne(+id);
  }

  // Atualizar ocorrência (PUT)
  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateOccurrenceDto) {
    return this.occurrencesService.update(+id, data);
  }

  // Atualização parcial de ocorrência (PATCH)
  @Patch(':id')
  patch(@Param('id') id: string, @Body() data: UpdateOccurrenceDto) {
    return this.occurrencesService.update(+id, data);
  }

  // Deletar ocorrência
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.occurrencesService.remove(+id);
  }
}
