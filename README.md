<p align="center" dir="auto">
  <a><img src="https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667" width="120" alt="Nest Logo" style="max-width: 100%;"></a>
</p>


# Projeto base em Nest.js

Esse projeto é estruturado com a arquitetura Service Repository, sendo muito fiel aos principios do # SOLID.
Nesse projeto teremos as seguintes estrutura de diretórios: 

- Http
  Onde voce irá gerencias as Controllers, DTO'S, Middleware, Validates e os respectivos Modules.
  
- Services
  Onde você irá trabalhar a regra de negócio da aplicação.
  
- Repository
  Onde você irá trabalhar com querys e regras de negócio do banco de dados, instanciando a ORM Prisma.

- Providers
  Onde você irá criar seus provedores de serviços externos

- Listeners
  Onde você vai "ouvir" metodos disparados em sua aplicação e executar ações específicas em resposta a esses eventos.

- Config
  Servem para definir e personalizar o comportamento de sua aplicação NestJs. Elas são utilizadas para armazenar informações que podem variar de aplicação para aplicação.


Este é um projeto Nest.js utilizamos TypeScript e Prisma
Aqui um <a href="https://www.prisma.io/docs/getting-started" target="_blank">link</a> da ORM Prisma

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu sistema antes de executar o projeto:

- Node.js (v20.4.0)
- npm (v9.7.2)
- Yarn (v1.22.9) opcional
- Banco de Dados [MYSQL] [PGSQL]

## Configuração

Siga estas etapas para configurar e executar o projeto:

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/bethojunior/nest-default.git
   cd nest-default
   npx prisma migrate dev --name init
   nest start dev --watch


