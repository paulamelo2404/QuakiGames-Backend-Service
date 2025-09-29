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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from '../services/categoria.service';

@UsePipes(ValidationPipe)
@Controller('/categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  // ** GET /categorias **
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  // ** GET /categorias/:id **
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }

  // ** GET /categorias/categoria/:categoria **
  @Get('/categoria/:categoria')
  @HttpCode(HttpStatus.OK)
  findByAllCategoria(
    @Param('categoria') categoria: string,
  ): Promise<Categoria[]> {
    return this.categoriaService.findByCategoria(categoria);
  }

  // ** POST /categorias **
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  // ** PUT /categorias **
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  // ** DELETE /categorias/:id **
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.categoriaService.delete(id);
  }
}
