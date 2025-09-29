import { IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  plataforma: string;

  @IsNumber()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  preco: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  desenvolvedor: string;

  @Column({ type: 'date', nullable: false })
  lancamento: Date;

  // Relacionamento Many-to-One: Muitos Produtos têm Uma Categoria
  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE', // Opcional: define o comportamento de exclusão
  })
  @JoinColumn({ name: 'categoria_id' }) // Cria a coluna 'categoria_id' no seu banco
  categoria: Categoria;
}
