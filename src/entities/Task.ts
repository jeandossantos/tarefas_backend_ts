/* eslint-disable camelcase */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  user_id: number;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  userId: User;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  priority: number;

  @Column()
  deadline: Date;

  @Column()
  done: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;
}
