import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user/user'; // <- importar a entidade

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'cbmpe_user',
      password: 'Cbmp3@2025',
      database: 'cbmpe_db',
      entities: [User], // <- usar a entidade diretamente
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
