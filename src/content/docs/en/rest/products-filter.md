---
title: Filtrar productos
description: Endpoints para filtrar productos
---

## Filtrar por el nombre

Usando el endpoint `/products/all` y pasando `name` como parámetro de consulta, puedes filtrar productos por nombre.

> Se reemplaza `Generic` por `libro` para mostrar una request con resultados.

Request:

```sh
[GET] https://fake-store-api-409620.rj.r.appspot.com/api/products/all?name=Generic
```

Response:
```json

{
  "content": [
    {
      "id": 34,
      "name": "Libro de Cocina 'Recetas del Mundo'",
      "description": "Libro de recetas con platos internacionales, ilustraciones y guías paso a paso.",
      "price": 29.99,
      "stockQuantity": 40,
      "categoryName": "Libros y Papelería",
      "imageUrl": "https://i.ibb.co/f8qMcL3/Libro-de-Cocina-Recetas-del-Mundo.png",
      "createdAt": "2023-12-29",
      "updatedAt": "2023-12-29"
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
  "totalPages": 1,
  "totalElements": 1,
  "last": true,
  "size": 5,
  "number": 0,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "numberOfElements": 1,
  "first": true,
  "empty": false
}
```


## Filtrar por rango de precios


Usando el endpoint `/products/all` y pasando `priceMin` y `priceMax` como parámetros de consulta, puedes filtrar productos por rango de precios.

Request:

```sh
[GET] https://fake-store-api-409620.rj.r.appspot.com/api/products/all?priceMin=900&priceMax=1500
```

Response:
```json
{
  "content": [
    {
      "id": 1,
      "name": "Portátil Apple MacBook Pro",
      "description": "Portátil de alto rendimiento con pantalla Retina de 13 pulgadas, chip Apple M1, 8 GB de RAM y 256 GB de SSD.",
      "price": 1299.99,
      "stockQuantity": 75,
      "categoryName": "Electrónica",
      "imageUrl": "https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png",
      "createdAt": "2023-12-29",
      "updatedAt": "2023-12-29"
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
  "totalPages": 1,
  "totalElements": 1,
  "last": true,
  "size": 5,
  "number": 0,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "numberOfElements": 1,
  "first": true,
  "empty": false
}
```





## Filtrar por categoría

Usando el endpoint `/products/all` y pasando `categoryId` como parámetro de consulta, puedes filtrar productos por categoría.



Request:

```sh
[GET] https://fake-store-api-409620.rj.r.appspot.com/api/products/all?categoryId=2
```

> **Nota:** Puedes encontrar el id de cada categoría en el endpoint `/categories/all`.


Response:
```json
{
  "content": [
    {
      "id": 6,
      "name": "Camiseta Nike Dri-FIT",
      "description": "Camiseta deportiva de alto rendimiento con tecnología Dri-FIT para mantenerse seco y cómodo.",
      "price": 39.99,
      "stockQuantity": 100,
      "categoryName": "Moda",
      "imageUrl": "https://i.ibb.co/Hpv1gLk/Camiseta-Nike-Dri-FIT.png",
      "createdAt": "2023-12-29",
      "updatedAt": "2023-12-29"
    }
   // ...
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
  "totalPages": 1,
  "totalElements": 5,
  "last": true,
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


## Unir filtros

Puedes filtrar productos usando todos los parámetros de consulta y unirlos todos.

Ejemplo: Todos los productos con un precio entre `900` y `1300`, con el título `"Generic"` y el id de categoría `1`.


> Se reemplaza `Generic` por `Apple` para mostrar una request con resultados.

```sh
[GET] https://fake-store-api-409620.rj.r.appspot.com/api/products/all?title=Generic&priceMin=900&priceMax=1300&categoryId=1
```


Response:
```json

{
  "content": [
    {
      "id": 1,
      "name": "Portátil Apple MacBook Pro",
      "description": "Portátil de alto rendimiento con pantalla Retina de 13 pulgadas, chip Apple M1, 8 GB de RAM y 256 GB de SSD.",
      "price": 1299.99,
      "stockQuantity": 75,
      "categoryName": "Electrónica",
      "imageUrl": "https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png",
      "createdAt": "2023-12-29",
      "updatedAt": "2023-12-29"
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
  "totalPages": 1,
  "totalElements": 1,
  "last": true,
  "size": 5,
  "number": 0,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "numberOfElements": 1,
  "first": true,
  "empty": false
}
```


Ejemplo: Todos los productos con un precio entre `500` y `2000`, con el id de categoría `1`, con un límite de `2` productos y un offset de `1`.


```sh
[GET] https://fake-store-api-409620.rj.r.appspot.com/api/products/all?size=2&priceMin=500&priceMax=2000&categoryId=1&page=1
```

Response:
```json

{
  "content": [
    {
      "id": 3,
      "name": "Cámara Sony Alpha A7 III",
      "description": "Cámara mirrorless con sensor full-frame de 24.2 MP, grabación de vídeo 4K HDR y sistema de enfoque automático rápido.",
      "price": 1999.99,
      "stockQuantity": 30,
      "categoryName": "Electrónica",
      "imageUrl": "https://i.ibb.co/ZHT2r1s/C-mara-Sony-Alpha-A7-III.png",
      "createdAt": "2023-12-29",
      "updatedAt": "2023-12-29"
    }
  ],
  "pageable": {
    "pageNumber": 1,
    "pageSize": 2,
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "offset": 2,
    "paged": true,
    "unpaged": false
  },
  "totalPages": 2,
  "totalElements": 3,
  "last": true,
  "size": 2,
  "number": 1,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "numberOfElements": 1,
  "first": false,
  "empty": false
}
```

---

> Como se esta usando la interfaz `pageable`, puedes usar los parámetros `page` y `size` para paginar los resultados. Además también se puede usar el parámetro `sort` para ordenar los resultados como se explico en la sección anterior.


