import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
