---
title: Categorías
description: Endpoints para categorías
---

## Obtener todas las categorías

Puedes acceder a la lista de 5 categorías usando el endpoint `/categories/all`.

Request:

```
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/categories/all
```

Response:

```json
{
  "content": [
    {
      "id": 1,
      "name": "Electrónica",
      "image": "https://i.ibb.co/1QzkGf7/Electronica.png",
      "description": "Productos relacionados con dispositivos electrónicos, como smartphones, televisores, computadoras y más."
    },

    // ...

    {
      "id": 5,
      "name": "Salud y Belleza",
      "image": "https://i.ibb.co/ZSsFGNL/Salud-y-belleza.png",
      "description": "Productos para el cuidado personal y bienestar, incluyendo cosméticos, productos de higiene, suplementos y equipos de fitness."
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 5,
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "totalPages": 2,
  "totalElements": 10,
  "last": false,
  "size": 5,
  "number": 0,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "numberOfElements": 5,
  "first": true,
  "empty": false
}
```

## Obtener una categoría (por ID)

Puedes obtener una categoría por su `id` usando el endpoint `/categories/{id}`

Request:

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/categories/5
```

Response:

```json
{
  "id": 5,
  "name": "Salud y Belleza",
  "image": "https://i.ibb.co/ZSsFGNL/Salud-y-belleza.png",
  "description": "Productos para el cuidado personal y bienestar, incluyendo cosméticos, productos de higiene, suplementos y equipos de fitness."
}
```

## Crear una categoría

Puedes crear una nueva categoría enviando un objeto como el siguiente a `/categories/create`

Request:

```sh
[POST] https://fake-store-api-2no73ornoa-uc.a.run.app/api/categories/create
# Body
{
  "name": "Salud y Belleza",
  "description": "Productos para el cuidado personal y bienestar, incluyendo cosméticos, productos de higiene, suplementos y equipos de fitness.",
  "image": "https://i.ibb.co/ZSsFGNL/Salud-y-belleza.png"
}

```

Response:

```json
{
  "id": 5,
  "name": "Salud y Belleza",
  "image": "https://i.ibb.co/ZSsFGNL/Salud-y-belleza.png",
  "description": "Productos para el cuidado personal y bienestar, incluyendo cosméticos, productos de higiene, suplementos y equipos de fitness."
}
```

## Editar una categoría

Puedes editar una categoría existente enviando un objeto como el siguiente a `/categories/{id}`

Request:

```sh
[DELETE] https://fake-store-api-2no73ornoa-uc.a.run.app/api/categories/5
```

Response:

```json
true
```

## Modelo de datos

| Atributo    | Tipo   | Descripción                    |
| ----------- | ------ | ------------------------------ |
| id          | Number | El id de la categoría          |
| name        | String | El nombre de la categoría      |
| image       | String | La imagen de la categoría      |
| description | String | La descripción de la categoría |
