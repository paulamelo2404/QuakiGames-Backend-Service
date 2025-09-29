import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  // 1. Buscar Tudo (findAll)
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      relations: {
        produtos: true, // Traz todos os produtos relacionados à categoria
      },
    });
  }

  // 2. Buscar por ID (findById)
  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id },
      relations: {
        produtos: true,
      },
    });

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return categoria;
  }

  // Buscar por Categoria findByCategoria
  async findByCategoria(categoria: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        categoria: ILike(`%${categoria}%`),
      },
      relations: {
        produtos: true,
      },
    });
  }
  // 4. Criar (create)
  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  // 5. Atualizar (update)
  async update(categoria: Categoria): Promise<Categoria> {
    // Verifica se a Categoria existe antes de atualizar
    await this.findById(categoria.id);
    return await this.categoriaRepository.save(categoria);
  }

  // 6. Apagar (delete)
  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id); // Verifica se existe
    return await this.categoriaRepository.delete(id);
  }
}
