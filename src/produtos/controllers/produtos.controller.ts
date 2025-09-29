import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Produto } from '../entities/produtos.entity'; // Entidade Produto
import { ProdutosService } from '../services/produtos.service'; // Service de Produtos

// Rota base /produtos
@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  // ** GET /produtos ** (Buscar tudo)
  @Get()
  @HttpCode(HttpStatus.OK) // 200
  findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  // ** GET /produtos/:id ** (Buscar por ID)
  @Get('/:id')
  @HttpCode(HttpStatus.OK) // 200
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtosService.findById(id);
  }

  // ** GET /produtos/nome/:nome ** (Buscar por Nome)
  // Mapeado de '/titulo/:titulo' para '/nome/:nome'
  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK) // 200
  findAllByNome(@Param('nome') nome: string): Promise<Produto[]> {
    // Usando o método que criamos no Service
    return this.produtosService.findAllByNome(nome);
  }

  // ** POST /produtos ** (Criar novo produto)
  @Post()
  @HttpCode(HttpStatus.CREATED) // 201
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtosService.create(produto);
  }

  // ** PUT /produtos ** (Atualizar produto)
  @Put()
  @HttpCode(HttpStatus.OK) // 200
  update(@Body() produto: Produto): Promise<Produto> {
    return this.produtosService.update(produto);
  }

  // ** DELETE /produtos/:id ** (Deletar produto)
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.produtosService.delete(id);
  }
}
