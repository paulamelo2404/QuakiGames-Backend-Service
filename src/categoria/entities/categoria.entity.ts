import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produtos/entities/produtos.entity';

@Entity({ name: 'tb_categorias' }) // Nome da tabela no banco de dados
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  categoria: string; // Ex: 'RPG', 'Ação', 'Console'

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  descricao: string;

  // Relacionamento One-to-Many: Uma Categoria pode ter Múltiplos Produtos
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];
}
