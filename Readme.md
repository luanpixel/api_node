# API de catalogo
##### Catalogo para filmes

## REQUISITOS
##### Node.js
##### Xamp


# Primeiro passo:
#### iniciar o apache e mysql do xamp.

# Na raiz do projeto dar os seguintes comandos:
#### 1. NPM install
#### 2. knex migrate:latest

# API 

## Obter todos os filmes

### Request

`get api/title`

    localhost:3002/title
    
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

    POST 'https://localhost:3002/title'

    {
        "name": "Matrix",
        "genero": "Ação",
        "description": "Filme muito bom",
    }
      
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

GET 'https://localhost:3002/tile/01'

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

PUT 'https://localhost:3002/title/01'

    {
        "name": "Animatrix",
        "genero": "animação",
        "description": "Animação no universo de matrix",
    }

### Response

   [![Generic badge](https://img.shields.io/badge/200-OK-<COLOR>.svg)](https://shields.io/)
 
 
## Remover filme pelo ID

### Request

`DELETE /api/title/id`

DELETE 'https://localhost:3002/title/1'

### Response

   [![Generic badge](https://img.shields.io/badge/410-DONE-<COLOR>.svg)](https://shields.io/)

### Author

Luan da SIlva Gomes
