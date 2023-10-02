# challenge-allu

Aplicação do backend para o desafio técnico da allu. Aplicação feita em nodeJS usando o framework [NestJs](https://nestjs.com/).

## Como instalar e utilizar
Todos comando abaixo podem ser rodados no terminal do vscode, windows ou linux

- Clonar o repositório do github
  ```bash
  $ git clone https://github.com/hugolmribeiro/challenge-allu-frontend
  ```
- Depois de clonado, na linha de comando, rodar o seguinte comando para instalar as dependências do projeto. (_É necessário ter o node e o npm instalados no computador para rodar os comandos a seguir_). Link para instalar o [node](https://nodejs.org/en/download) - [Tutorial](https://www.youtube.com/watch?v=iXvtbFa32Jg)
  ```bash
  $ npm install
  ```
### Váriaveis de ambiente
O repositório possui um arquivo chamado [.env.example](https://github.com/hugolmribeiro/challenge-allu/blob/main/.env.example) que possui todas variáveis de ambiente necessárias para o funcionamento da api. É necessário criar um arquivo chamado .env com as chaves listadas no .env.example.

### Banco de dados
O banco de dados usado na aplicação é o postgres, portanto é necessário ter o postgres instalado e configurado no computador. Segue o [tutorial](https://www.youtube.com/watch?v=L_2l8XTCPAE)(Até 7:00 minutos). Após configurado o postgres, troque a chave DATABASE_URL para a suas configurações de conexão.
- Instalando o CLI do Prisma para rodar as migrations e seeds
  ```bash
  $ npm install -g prisma
  ```
  
- Rodando as migration e criando o banco de dados
  ```bash
  $ npx migrate dev
  ```
- Gerando o client do prisma
  ```bash
  $ npx prisma generate
  ``` 
### Seed Products
- Rodando a seed o banco será alimentado com produtos
```bash
$ npx prisma db seed
```
### Rodando aplicação

- Comando para compilar o código e inicia o servidor de desenvolvimento
```bash
$ npm run start:dev

```

- Com a aplicação já deverá estar pronta uso.

## Informações adicionais 
- A aplicação possui documentação de todos seus endpoints pelo swagger, para ver o swagger basta acessar http://localhost:3000/api#/ com o servidor de desenvolvimento rodando
- [Esquema do banco de dados da aplicação](https://drive.google.com/file/d/14Da9XCc9StHfTbMMXGlr_RREv3FQITsx/view?usp=sharing)


### Testes
A aplicação possui alguns testes unitários, para rodar os testes use um dos comandado abaixo:
```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

