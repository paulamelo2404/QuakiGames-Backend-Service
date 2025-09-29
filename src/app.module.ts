import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Produto } from './produtos/entities/produtos.entity';
import { ProdutosModule } from './produtos/produtos.module';
import { Categoria } from './categoria/entities/categoria.entity';

// conexao com o banco de dados atraves de TypeORM
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_quackigames',
      entities: [Produto, Categoria],
      synchronize: true,
      // logging: true, //opcional
    }),

    ProdutosModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
