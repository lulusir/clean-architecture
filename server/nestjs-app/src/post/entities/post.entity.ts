import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class PostOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  authorId: number;

  @Column()
  content: string;

  @Column({ type: 'timestamp' })
  updateAt: Date;

  @Column({ type: 'timestamp' })
  createdAt: Date;
}
