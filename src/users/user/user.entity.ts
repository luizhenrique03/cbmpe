import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Occurrence } from '../../occurrences/occurrence.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false }) // a senha não será retornada
  password: string;

  @OneToMany(() => Occurrence, (occurrence) => occurrence.user)
  occurrences: Occurrence[];
}
