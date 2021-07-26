# API de catalogo
##### Catalogo para filmes

## REQUISITOS
##### Node.js
##### Xamp


# Primeiro passo:
#### iniciar o apache e mysql do xamp.

# Na raiz do projeto dar os seguintes comandos:
#### 1. npm install
#### 2. knex migrate:latest

# API 

## Obter todos os filmes

### Request

`get api/title`

    curl --request GET \
    --url http://localhost:3002/api/title
    
### Response
[![Generic badge](https://img.shields.io/badge/200-OK-<COLOR>.svg)](https://shields.io/)

    {
       "id": "1",
       "name": "Matrix",
       "genero": "Ação",
       "description": "Filme muito bom",
    },
    {
       "id": "2",
       "name": "Mad Max",
       "genero": "Corrida",
       "description": "Filme incrivel"
    }
       
## Adicionar novo filme

### Request

`POST api/title`

    curl --request POST \
  	--url http://localhost:3002/api/title \
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
     
## Obter um filme pelo ID

### Request

`GET /api/title/id`

   	curl --request GET \
  	--url http://localhost:3002/api/title/1

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
  	--url http://localhost:3002/api/title/6 \
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
  	--url http://localhost:3002/api/title/1

### Response

   [![Generic badge](https://img.shields.io/badge/410-DONE-<COLOR>.svg)](https://shields.io/)

### Author

Luan da Silva Gomes
