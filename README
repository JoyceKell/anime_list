# Projeto de API com Express e MongoDB

Este projeto implementa uma API com operações CRUD para gerenciar informações sobre animes, e um sistema de autenticação com JWT para acesso aos recursos da API. A aplicação utiliza o framework Express.js para construir a API e o banco de dados MongoDB para armazenar os dados.

## Instalação
Antes de executar o projeto, certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.
- Clone o repositório do projeto:
``` git clone https://github.com/JoyceKell/anime_list.git ```
- Instale as dependências:
``` cd animelist ```
``` npm install ```
- Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
``` MONGODB_URI=<URL de conexão do MongoDB> JWT_SECRET=<chave secreta para gerar tokens JWT>```

## Uso
Para iniciar o servidor, execute o seguinte comando na raiz do projeto:
```npm start```
A API estará disponível em http://localhost:3000.
## Endpoints
A API disponibiliza os seguintes endpoints para gerenciamento dos animes:
- POST /animes: Cria um novo anime. É necessário estar autenticado para acessar esta rota.
- GET /animes: Retorna todos os animes cadastrados.
- GET /animes/:animeId: Retorna um anime específico pelo seu ID.
- PUT /animes/:animeId: Atualiza um anime existente pelo seu ID. É necessário estar autenticado para acessar esta rota.
- DELETE /animes/:animeId: Exclui um anime existente pelo seu ID. É necessário estar autenticado para acessar esta rota.

A API também disponibiliza os seguintes endpoints para autenticação de usuários:

 - POST /users/register: Registra um novo usuário na aplicação.
 - POST /users/login: Realiza o login de um usuário existente.
 
## Autenticação
Para acessar as rotas que requerem autenticação, é necessário enviar o token JWT no cabeçalho de autenticação da requisição. O token pode ser obtido após o login na rota /users/login.
Exemplo de requisição autenticada utilizando o curl:

```curl -X GET http://localhost:3000/animes \
  -H "Authorization: Bearer <token>"
```
## Contribuição
Contribuições ao projeto são sempre bem-vindas! Para isso, siga as seguintes etapas:

- Faça um fork do repositório.
- Crie uma nova branch para implementar suas alterações.
- Faça suas alterações e escreva testes se necessário.
- Envie um pull request para a branch principal.

