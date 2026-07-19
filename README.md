# API de Restaurante

> Projeto desenvolvido durante o curso de Full Stack com o objetivo de praticar desenvolvimento backend, criação de APIs REST e integração com banco de dados.

---

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de criar uma API para gerenciamento de um restaurante, aplicando backend, organização de código e regras de negócio.

A aplicação permite gerenciar produtos, mesas, sessões de atendimento e pedidos, simulando o funcionamento de um restaurante através de uma API.

Utilizei controllers, migrations, relacionamentos entre tabelas, validação de dados e comunicação com banco de dados utilizando Knex.

---

### Funcionalidades implementadas

- Cadastro e listagem de produtos
- Gerenciamento de mesas
- Abertura e fechamento de sessões de mesas
- Criação e listagem de pedidos
- Cálculo do valor total dos pedidos
- Validação de dados utilizando Zod

---

## Endpoints Desenvolvidos

### Produtos

#### Cadastrar Produto

**POST** `/products`

#### Listar Produtos

**GET** `/products`

#### Buscar Produto por ID

**GET** `/products/:id`

#### Atualizar Produto

**PUT** `/products/:id`

#### Remover Produto

**DELETE** `/products/:id`

---

### Mesas

#### Criar Mesa

**POST** `/tables`

#### Listar Mesas

**GET** `/tables`

#### Buscar Mesa por ID

**GET** `/tables/:id`

---

### Sessões de Mesas

#### Abrir Sessão da Mesa

**POST** `/tables/:table_id/open`

#### Fechar Sessão da Mesa

**PATCH** `/tables/:table_id/close`

---

### Pedidos

#### Criar Pedido

**POST** `/orders`

#### Listar Pedidos da Mesa

**GET** `/orders/table/:table_session_id`
## Regras Implementadas

- Não permite cadastro de produtos sem informações obrigatórias.
- Verifica a existência de produtos antes de criar pedidos.
- Não permite adicionar pedidos em mesas fechadas.
- Controla sessões abertas e fechadas das mesas.
- Calcula automaticamente o valor total dos pedidos.

---

## Tecnologias Utilizadas

<div align="left">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
<img src="https://img.shields.io/badge/Knex.js-E16426?style=for-the-badge&logo=knexdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" />

</div>

---

## Testes

Utilizei o **Insomnia** para testar as rotas da API, validar respostas e verificar o funcionamento das regras implementadas.

---

## Execução Local

Clone o repositório:

```bash
git clone https://github.com/MayconSantos04/API-de-Restaurante.git
```
Acesse a pasta do projeto:
```bash
cd API-de-Restaurante
```
Instale as dependências:
```bash
npm install
```
Execute as migrations:
```bash
npm run knex -- migrate:latest
```
Execute o projeto:
```bash
npm run dev
```
