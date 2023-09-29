import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fridge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
