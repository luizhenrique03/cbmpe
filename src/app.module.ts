import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OccurrencesModule } from './occurrences/occurrences.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'cbmpe_user',
      password: 'Cbmp3@2025',
      database: 'cbmpe_db',
      autoLoadEntities: true, // <- deixa o Nest carregar todas as entities automaticamente
      synchronize: true,
    }),

    UsersModule,
    OccurrencesModule, // <- IMPORTANTE!
  ],
})
export class AppModule {}
