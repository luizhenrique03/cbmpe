import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Occurrence } from './occurrence.entity';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { UpdateOccurrenceDto } from './dto/update-occurrence.dto';
import { User } from '../users/user/user.entity';

@Injectable()
export class OccurrencesService {
  constructor(
    @InjectRepository(Occurrence)
    private readonly occurrenceRepository: Repository<Occurrence>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Criar ocorrência associando usuário
  async create(data: CreateOccurrenceDto) {
    const user = await this.userRepository.findOne({
      where: { id: data.userId },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const occurrence = this.occurrenceRepository.create({
      titulo: data.titulo,
      descricao: data.descricao,
      local: data.local,
      user,
    });

    return await this.occurrenceRepository.save(occurrence);
  }

  // Listar todas as ocorrências com dados do usuário
  async findAll() {
    return await this.occurrenceRepository.find({
      relations: ['user'],
    });
  }

  // Buscar ocorrência específica pelo ID
  async findOne(id: number) {
    const occurrence = await this.occurrenceRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!occurrence) {
      throw new NotFoundException('Ocorrência não encontrada');
    }

    return occurrence;
  }

  // Atualizar ocorrência existente
  async update(id: number, data: UpdateOccurrenceDto) {
    const occurrence = await this.findOne(id);

    Object.assign(occurrence, data);

    return await this.occurrenceRepository.save(occurrence);
  }

  // Remover ocorrência
  async remove(id: number) {
    const occurrence = await this.findOne(id);
    await this.occurrenceRepository.remove(occurrence);
    return { message: 'Ocorrência removida com sucesso' };
  }
}
