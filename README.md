# 🎮 QuakiGames Backend Service


## 📋 Sobre o Projeto
O QuakiGames Backend Service é um sistema completo de e-commerce para jogos digitais desenvolvido em TypeScript como projeto do bootcamp da Generation Brasil. Seguindo a arquitetura modular do NestJS, o sistema oferece APIs para gerenciamento de produtos e categorias de games.

## 👩‍💻 Desenvolvedora
Paula Melo - Desenvolvedora Backend Full Stack


--
## ✨ Funcionalidades

🎮 Gestão de Produtos
Cadastro de Jogos - Criação de novos produtos com informações completas

Atualização de Dados - Edição de informações dos jogos

Consulta de Catálogo - Listagem completa de produtos disponíveis

Busca por Categoria - Filtragem de jogos por tipo


--
## 📂 Gestão de Categorias
Categorias de Games - Organização por gêneros (Ação, RPG, Simulação, Aventura)

Descrições Detalhadas - Informações sobre cada categoria

Relacionamento Produto-Categoria - Vínculo entre jogos e suas categorias


--
## 🔧 Operações Técnicas
API RESTful - Endpoints padronizados para integração

Validação de Dados - Verificação de entradas e tipos

Gestão de Banco de Dados - Persistência segura com MySQL

Arquitetura Escalável - Estrutura preparada para crescimento


--
## 🏗️ Arquitetura do Projeto (NestJS Modular)
O projeto segue a arquitetura modular do NestJS para garantir organização e manutenibilidade:

📋 Camada de Dados (Entities)
src/entities/produtos.entity.ts - Modelo de dados dos produtos

src/entities/categoria.entity.ts - Modelo de dados das categorias

⚙️ Camada de Controladores (Controllers)
src/controllers/produtos.controller.ts - Endpoints de produtos

src/controllers/categoria.controller.ts - Endpoints de categorias

🔧 Camada de Serviços (Services)
src/services/produtos.service.ts - Lógica de negócio dos produtos

src/services/categoria.service.ts - Lógica de negócio das categorias

## 🗂️ Camada de Módulos (Modules)
src/modules/products.module.ts - Módulo de produtos

src/modules/categoria.module.ts - Módulo de categorias


--
## 🛠️ Tecnologias Utilizadas
TypeScript - Linguagem principal com tipagem estática

NestJS - Framework para construção de APIs eficientes

MySQL - Banco de dados relacional

TypeORM - Mapeamento objeto-relacional

Node.js - Ambiente de execução JavaScript/TypeScript

Git - Controle de versão


--
## 📊 Banco de Dados

Tabela: tb_produtos
Campo	Tipo	Descrição
id	INT	Identificador único
nome	VARCHAR	Nome do jogo
plataforma	VARCHAR	Plataforma (PC, PS5, Xbox)
preco	DECIMAL	Preço do jogo
desenvolvedor	VARCHAR	Empresa desenvolvedora
lancamento	DATE	Data de lançamento
categoria_id	INT	Chave estrangeira para categorias

Tabela: tb_categorias
Campo	Tipo	Descrição
id	INT	Identificador único
categoria	VARCHAR	Nome da categoria
descricao	TEXT	Descrição detalhada


--
### 👥 Como Contribuir
Faça um Fork do projeto

Crie uma Branch: git checkout -b feature/nova-funcionalidade

Commit suas mudanças: git commit -m 'feat: adiciona nova funcionalidade'

Push para a Branch: git push origin feature/nova-funcionalidade

Abra um Pull Request


--

## 🙏 Agradecimentos
Generation Brasil - Pelo bootcamp e orientação técnica

Instrutores e Colegas - Pelo apoio durante o desenvolvimento

Comunidade NestJS - Pela documentação e suporte

QuakiGames - Seu universo de jogos em um só lugar! 🎮🚀

___________________________________________________________________________
Desenvolvido com 💙 por Paula Melo para o bootcamp Generation Brasil


