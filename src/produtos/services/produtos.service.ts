import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { CategoriaService } from '../../categoria/services/categoria.service';
import { Produto } from '../entities/produtos.entity'; // importa a entidade

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    private categoriaService: CategoriaService,
  ) {}

  //busca tudo
  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true, // Traz o objeto Categoria junto com o Produto
      },
    });
  }
  // Buscar por ID (findById)
  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true,
      },
    });

    if (!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    return produto;
  }

  // Buscar por Nome (findAllByNome)
  async findAllByNome(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  // 4. Criar - com relacionamento das tabelas
  async create(produto: Produto): Promise<Produto> {
    // 1. Valida se a categoria existe
    if (produto.categoria) {
      // Chama o findById do CategoriaService. Se a categoria não existir, ele lança um 404.
      await this.categoriaService.findById(produto.categoria.id);

      // 2. Garante que a data de lançamento seja salva no formato correto (apenas data)
      produto.lancamento = new Date(produto.lancamento);
    } else {
      // Se não houver categoria, lançamos um erro
      throw new HttpException(
        'A Categoria do Produto é obrigatória!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.produtoRepository.save(produto);
  }

  // ** 5. Atualizar (update) **
  async update(produto: Produto): Promise<Produto> {
    await this.findById(produto.id); // 1. Verifica se o produto existe

    // Valida se a categoria existe
    if (produto.categoria) {
      await this.categoriaService.findById(produto.categoria.id);

      // Garante que o campo de data seja tratado
      produto.lancamento = new Date(produto.lancamento);
    } else {
      throw new HttpException(
        'A Categoria do Produto é obrigatória!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.produtoRepository.save(produto);
  }

  // 6. Apagar delete
  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.produtoRepository.delete(id);
  }
}
