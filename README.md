## PROJETO DE ESTUDO PESSOAL, APRENDENDO SCHEMA'S NO PRISMA E FAZENDO INTEGRAÇÃO COM API E BANCO DE DADOS.

### PROJETO CRIADO COM:

* NEXT
* PRISMA
* API 
* AXIOS
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
### AUTENTICAÇÃO ESTA LOCALIZADA EM `PAGES/AUTH`

* Selecionar com paginação utilize a rota `http://localhost/api/users?page=id` sendo o id o numero da pagina.
* Selecionar unico usuario utilize a rota `http://localhost/api/users/id` sendo o id um numero. 
- (o id deve ser o mesmo id utilizado na tabela `user`)
* Caso queira Deletar um usuario  utilize a rota `http://localhost/api/users` adicione no `body` da requisição o id.
* Rota de mudança de usuario ainda nao implementada 100%

* A autenticação so ocorre se o email da tabela `user` for igual ao email digitado. (autenticação por email, senha ainda não implementada utilize qualquer senha como EX: 123).


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