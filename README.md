# Reprograma-Projeto-Final
Projeto final de conclusão do curso Backend da turma 11 Todas em tech do Reprograma

## Sobre o Projeto

O **ReciclaJa** é uma API RESTfull de consulta a cooperativas e instituições de reciclagem que tem como objetivo cadastrar cooperativas e empresas que fazem reciclagem e proporcionar aos usuários um meio de consultar locais que trabalham com reciclagem ou recebem materiais como papel, garrafas PET, pilhas, óleos etc. 

## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 REPROGRAMA-PROJETO-FINAL
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📄 instituicaoController.js
   |         |- 📄 produtoController.js
   |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 models
   |         |- 📄 instituicao.js
   |         |- 📄 produto.js
   |
   |    |- 📁 routes
   |         |- 📄 index.js 
   |         |- 📄 instituicoesRoutes.js 
   |         |- 📄 produtosRoutes.js 
   |
   |    |- 📄 app.js    |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json   
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js

```

<br>
<br>

##  Documentação
Acesse o board para conferir as informações de forma visual: https://miro.com/app/board/o9J_lA7Nns8=/

### Regra de negócios - Cooperativas/Instituição 
- [x] A cooperativa/instituição não pode ser cadastrada mais de uma vez;
- [x] O sistema deve ser capaz de criar, listar todos, listar por id, atualizar e excluir;
- [x] O cadastro só pode ser realizado com todos os campos preenchidos.

### Rotas - Cooperativas/Instituição
- [x]  **"/post/instituicoes"** Deverá criar uma cooperativa/instituição;
- [x]  **"/get/instituicoes"** Deverá retornar todas as cooperativas/instituições cadastradas;
- [x]  **"/get/instituicoes/[id]"** Deverá retornar uma cooperativa/instituição baseada em seu Id;
- [x]  **"/get/instituicoes/bairro"** Deverá retornar cooperativas/instituições baseada no bairro;
- [x]  **"/patch/instituicoes/[id]"** Deverá atualizar algum dado especÍfico da cooperativa/instituição baseada em seu Id;
- [x]  **"/delete/instituicoes/[id]"** Deverá excluir uma cooperativa/instituição baseada em seu Id;

### Regra de negócios - Produtos
- [x] O produto deve estar vinculado a uma cooperativa/instituição;
- [x] O sistema deve ser capaz de criar, listar todos, listar por id, atualizar e excluir;
- [x] O cadastro só pode ser realizado com todos os campos preenchidos.

### Rotas - Produtos
- [x]  **"/post/produtos"** Deverá criar um produto;
- [x]  **"/get/produtos"** Deverá retornar todas os produtos;
- [x]  **"/get/produtos/[id]"** Deverá retornar um produto baseada em seu Id;
- [x]  **"/get/produtos/bairro"** Deverá retornar produtos listados no bairro;
- [x]  **"/patch/produtos/[id]"** Deverá atualizar algum dado específico de um produto baseada em seu Id;
- [x]  **"/delete/instituicoes/[id]"** Deverá excluir um produto baseada em seu Id;

<br>
<br>

### Dados para Collection Instituição

- id: autogerado e obrigatório
- nome: texto e obrigatório
- descricao: texto e obrigatório
- responsavel: texto e obrigatório
- endereco: texto e obrigatório
- bairro: texto e obrigatório
- cidade: texto e obrigatório
- telefone: texto e obrigatório
- horarioAbertura: texto e obrigatório
- horarioFechamento: texto e obrigatório
- tipoRecebimento: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:
[
  {
    "criadoEm": "2021-07-09T19:57:36.909Z",
    "_id": "60e8ad141044440004a52940",
    "nome": "Coperativa de catadores",
    "descricao": "Coperativa de catadores de lixo de Vitória da Conquista",
    "responsavel": "Julina Amaral",
    "telefone": "(77)99999-8888",
    "endereco": "Av  Manoel Bandeira, nº 38",
    "bairro": "Senhorina Cairo",
    "cidade": "Vitória da Conquista",
    "horarioAbertura": "07:00",
    "horarioFechamento": "17:30",
    "tipoRecebimento": "Recebe no local e pode ir buscar",
    "__v": 0
  },
  {
    "criadoEm": "2021-07-09T19:57:36.909Z",
    "_id": "60e8ade71044440004a52943",
    "nome": "Descarte aqui",
    "descricao": "Coperativa de reciclagem",
    "responsavel": "Manoel Méssias",
    "telefone": "(77)55555-4444",
    "endereco": "Av  MLuís Eduardo Magalhães, nº 438",
    "bairro": "Jurema",
    "cidade": "Vitória da Conquista",
    "horarioAbertura": "08:00",
    "horarioFechamento": "17:30",
    "tipoRecebimento": "Recebe no local de funcionamento",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Produtos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- orientacao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- instituicao: referencia da cooperativa/instituição cadastrada previamente obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    "criadoEm": "2021-07-09T19:57:36.950Z",
    "_id": "60e8b0971044440004a52948",
    "nome": "Papel",
    "orientacao": "Manter o material separado de residuos organicos",
    "instituicao": {
      "criadoEm": "2021-07-09T19:57:36.909Z",
      "_id": "60e8ad141044440004a52940",
      "nome": "Coperativa de catadores",
      "descricao": "Coperativa de catadores de lixo de Vitória da Conquista",
      "responsavel": "Julina Amaral",
      "telefone": "(77)99999-8888",
      "endereco": "Av  Manoel Bandeira, nº 38",
      "bairro": "Senhorina Cairo",
      "cidade": "Vitória da Conquista",
      "horarioAbertura": "07:00",
      "horarioFechamento": "17:30",
      "tipoRecebimento": "Recebe no local e pode ir buscar",
      "__v": 0
    },
    "__v": 0
  },
  {
    "criadoEm": "2021-07-09T19:57:36.950Z",
    "_id": "60e8b3791044440004a5294d",
    "nome": "PET",
    "orientacao": "Manter o material sem resíduos",
    "instituicao": {
      "criadoEm": "2021-07-09T19:57:36.909Z",
      "_id": "60e8ade71044440004a52943",
      "nome": "Descarte aqui",
      "descricao": "Coperativa de reciclagem",
      "responsavel": "Manoel Méssias",
      "telefone": "(77)55555-4444",
      "endereco": "Av  MLuís Eduardo Magalhães, nº 438",
      "bairro": "Jurema",
      "cidade": "Vitória da Conquista",
      "horarioAbertura": "08:00",
      "horarioFechamento": "17:30",
      "tipoRecebimento": "Recebe no local de funcionamento",
      "__v": 0
    },
    "__v": 0
  },
  {
    "criadoEm": "2021-07-09T19:57:36.950Z",
    "_id": "60e8b3b91044440004a5294f",
    "nome": "PET",
    "orientacao": "Manter o material sem resíduos",
    "instituicao": {
      "criadoEm": "2021-07-09T19:57:36.909Z",
      "_id": "60e8ad141044440004a52940",
      "nome": "Coperativa de catadores",
      "descricao": "Coperativa de catadores de lixo de Vitória da Conquista",
      "responsavel": "Julina Amaral",
      "telefone": "(77)99999-8888",
      "endereco": "Av  Manoel Bandeira, nº 38",
      "bairro": "Senhorina Cairo",
      "cidade": "Vitória da Conquista",
      "horarioAbertura": "07:00",
      "horarioFechamento": "17:30",
      "tipoRecebimento": "Recebe no local e pode ir buscar",
      "__v": 0
    },
    "__v": 0
  }
]
```
<br>
<br>

## Implementações Futuras

### Curto prazo
 - Construção do front,
 - Novas funcionalidades,

### Médio prazo
 - Criar nova coleção de usuários que permita coletar informações de localidades que mais pesquisam as cooperativas/instituições e fornecer as mesmas para que as cooperativas possam traçar alguma estratégia recebimento de mais produtos, expandir sua localodade de atuação etc.

### Longo prazo
 - Expanão para as cidades circunvizinhas.

## Eliane Almeida
- [instagram] (https://www.instagram.com/nanny.almeida_/)
- [linkedin](https://www.linkedin.com/in/eliane-v-almeida/)
- [github](https://github.com/ElianeA)
