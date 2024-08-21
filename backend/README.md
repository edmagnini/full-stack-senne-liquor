# Senne Liquor API

## Primeiros Passos

- Clonar este repositório
- Criar um arquivo .env na raiz do projeto e preencher as chaves a seguir com os valores apropriados: JWT_KEY=ChaveSecreta JWT_EXPIRES_IN=10min
```
  JWT_KEY=ChaveSecreta
  JWT_EXPIRES_IN=10min

  BCRYPT_COST=12

  PORT=3003

  DB_HOST=localhost
  DB_PORT=5433
  DB_DATABASE=liquor
  DB_USER=senne
  DB_PASSWORD=SomePass@
  DATABASE_URL=postgres://senne:SomePass@localhost:5433/liquor

  DB_ENV=development

  USER_EMAIL = "jose@example.com"
  USER_PASSWORD="SomePass@"
```

### No diretório raíz do projeto executar os seguintes comandos:

- docker-compose build

- docker-compose up


## Sobre o projeto

Geranciamento de hospitais, médicos, chamados e usuário.

Possui 4 entidades importantes:

Hospital

Médico

Chamado

Usuario

As funcionalidades são:

→ Criar usuário;

→ Login de usuário;

→ Cadastro de produção diária de leite;

→ Lista de Chamados;

→ Criarção de Chamados;

→ Lista de Hospitais;

→ Lista de Médicos;

→ Gerar JWTtoken;

→ Refreshh JWTtoken;

📋 Documentação:
http://localhost:3003/api-docs/

🛠️ Tecnologias utilizadas:

→ Knex;

→ Express;

→ Node.js:

→ Dotenv;

→ Bcrypt;

→ Jsonwebtoken;

→ Yup;

→ Swagger;

→ Docker;

