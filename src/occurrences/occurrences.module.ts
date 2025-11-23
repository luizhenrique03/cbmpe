import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Occurrence } from './occurrence.entity';
import { OccurrencesService } from './occurrences.service';
import { OccurrencesController } from './occurrences.controller';
import { UsersModule } from '../users/users.module'; // IMPORTAR o módulo de usuários

@Module({
  imports: [
    TypeOrmModule.forFeature([Occurrence]),
    UsersModule, // agora o OccurrencesService poderá usar UsersService
  ],
  controllers: [OccurrencesController],
  providers: [OccurrencesService],
})
export class OccurrencesModule {}
