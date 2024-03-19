## PROJETO DE ESTUDO PESSOAL, APRENDENDO SCHEMA'S NO PRISMA E FAZENDO INTEGRAÇÃO COM API E BANCO DE DADOS.

### PROJETO CRIADO COM:

* NEXT
* PRISMA
* API 
* AXIOS
* POSTGRESSQL
* REACT
* NEXT AUTH
* TYPESCRIPT
* TAILWIND


### NESSE PROJETO VOCÊ CONSEGUE:

* Adicionar usuarios
* Deletar usuairos (basta clicar no usuario)
* Selecionar com paginação (2 usuarios por 'pagina')
* Selecionar usuario unico (client-side não implementado)
### CRUD IMCOMPLETO

### AUTENTICAÇÃO 

* Efetuar Login
* Efetuar Logout


### API ESTA LOCALIZADA EM `PAGES/API/USERS`

* Selecionar com paginação utilize a rota `http://localhost/api/users?page=id` sendo o id o numero da pagina.
* Selecionar unico usuario utilize a rota `http://localhost/api/users/id` sendo o id um numero. 
- (o id deve ser o mesmo id utilizado na tabela `user`)
* Caso queira Deletar um usuario  utilize a rota `http://localhost/api/users` adicione no `body` da requisição o id.
* Rota de mudança de usuario ainda nao implementada 100%

  
### AUTENTICAÇÃO ESTA LOCALIZADA EM `PAGES/AUTH`

- A autenticação so ocorre se o email da tabela `user` for igual ao email digitado.
- (autenticação por email, senha ainda não implementada utilize qualquer senha como EX: 123).

### - Você deve modificar algumas informações no arquivo `.env` onde as variaveis de ambiente ficam armazenadas, dentro do arquivo `.env` você deve adicionar no NEXTAUTH_SECRET um HASH aleatorio de 32 caracteres (alguns sites fazem isso pra você) e adicionar as informações do seu banco de dados no `DATABASE_URL` como no exemplo abaixo.

* `DATABASE_URL = "postgresql://nome:senha@localhost:5432/nome_do_db?schema=public"` 

### Antes de iniciar o projeto use o comando `npx prisma db push` pra sincronizar o seu Schema do Prisma com o banco de dados.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000);
