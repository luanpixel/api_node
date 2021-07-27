# API de catalogo
##### Catalogo para filmes

## Como Executar

### 0 - Requisitos
Antes de executar a aplicação, tenha certeza de ter os seguintes requisitos :

- NodeJs 
- Banco de dados PostgreSQL

### 1 - Configurando variáveis de ambiente
As variáveis abaixo são **Necessárias** para o projeto funcionar.
```
   // DATABASE_URL
   DATABASE_URL = "postgres://uhnqfpkuokedqu:9dbbc2bca263669fd71f0e36a40abfa08ca5b5bec8d64e8713449078a5d942b9@ec2-54-236-137-173.compute-1.amazonaws.com:5432/dfkd46kuha9m0m" //Exemplo
   
```

### 2 - Iniciando a aplicação

  No seu diretório do projeto, instale todas as dependências com o comando :
  ```
  npm install
  ```
  No seu diretório do projeto, rode a migration com o comando : 
  ```
  knex migrate:latest
  ```
  Então, execute o seguinte comando para inicializar a aplicação :
  ```
  npm start
  ```

# API 

## Adicionar novo filme

### Request

`POST api/title`

     curl --request POST \
  	 --url http://localhost:3000/api/title \
 	 --header 'Content-Type: application/json' \
  	--data '{
	           "name": "Matrix",
	           "genero": "Ação",
	           "description": "Filme muito bom"
	           }'
      
### Response

[![Generic badge](https://img.shields.io/badge/201-CREATED-<COLOR>.svg)](https://shields.io/)


    {
        "id": "1",
        "name": "Matrix",
        "genero": "Ação",
        "description": "Filme muito bom",
    }'
     
     
## Obter todos os filmes

### Request

`get api/title`

    curl --request GET \
    --url http://localhost:3000/api/title
    
### Response
[![Generic badge](https://img.shields.io/badge/200-OK-<COLOR>.svg)](https://shields.io/)

    {
       "id": "1",
       "name": "Matrix",
       "genero": "Ação",
       "description": "Filme muito bom",
    }
       
## Obter um filme pelo ID

### Request

`GET /api/title/id`

   	curl --request GET \
  	--url http://localhost:3000/api/title/1

### Response

[![Generic badge](https://img.shields.io/badge/200-Ok-<COLOR>.svg)](https://shields.io/)

    {
        "id": "1",
        "name": "Matrix",
        "genero": "Ação",
        "description": "Filme muito bom",
    }
    

## Atualizar filme
### Request

`PUT api/title/id`

    curl --request PUT \
  	--url http://localhost:3000/api/title/1 \
  	--header 'Content-Type: application/json' \
  	--data '{
	            "name": "Animatrix",
	            "genero": "Animação", 
	            "description": "Animação no universo de Matrix"
	           }'

### Response

   [![Generic badge](https://img.shields.io/badge/200-OK-<COLOR>.svg)](https://shields.io/)
 
 
## Remover filme pelo ID

### Request

`DELETE /api/title/id`

    curl --request DELETE \
  	--url http://localhost:3000/api/title/1

### Response

   [![Generic badge](https://img.shields.io/badge/200-OK-<COLOR>.svg)](https://shields.io/)

### Author

Luan da Silva Gomes
