import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { Photo, PhotoValue } from '@interfaces/photo.interface';

@Entity({ name: 'photos' })
export class PhotoEntity implements Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  value: PhotoValue;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
