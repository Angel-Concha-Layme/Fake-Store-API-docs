---
title: Productos
description: Endpoints para productos.
---

## Obtener todos los productos

Puedes acceder a la lista de 50 productos usando el endpoint `/products`.

Request:

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all
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
    },
  // ...
]
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
  "totalPages": 10,
  "totalElements": 50,
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

## Obtener un producto (por ID)

Puedes obtener un producto usando el endpoint `products/<id>`.

Request:

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/4
```

Response:

```json
{
  "id": 4,
  "name": "Consola PlayStation 5",
  "description": "Consola de juegos de última generación con gráficos en 4K, SSD ultrarrápido y retrocompatibilidad con juegos de PS4.",
  "price": 499.99,
  "stockQuantity": 100,
  "categoryName": "Electrónica",
  "imageUrl": "https://i.ibb.co/BcqzzgF/Consola-Play-Station-5.png",
  "createdAt": "2023-12-29",
  "updatedAt": "2023-12-29"
}
```

## Crear un producto

Puedes crear un nuevo producto enviando un objeto como el siguiente a `/products/create`

Request:

```sh
[POST] https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/create
# Body
{
  "name": "Portátil Apple MacBook Pro",
  "description": "Portátil de alto rendimiento con pantalla Retina de 13 pulgadas, chip Apple M1, 8 GB de RAM y 256 GB de SSD.",
  "price": 1299.99,
  "stockQuantity": 75,
  "categoryId": 1,
  "imageUrl": "https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png"
}
```

Response:

```json
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
```

> Nota que el `categoryId` debe ser un ID que exista en `/categories` y la imagen es una URL válida.

## Actualizar un producto

Puedes actualizar un producto enviando un objeto como el siguiente y agregando el `id` como parámetro: `/products/update/<id>`

Request:

```sh
[PUT] https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/update/50
# Body
{
  "name": "Altavoz Bluetooth Portátil",
  "description": "Altavoz Bluetooth compacto y portátil con excelente calidad de sonido y resistencia al agua, ideal para llevarlo a cualquier parte.",
  "price": 99.99,
  "stockQuantity": 75,
  "categoryId": 10,
  "imageUrl": "https://i.ibb.co/LPYY3vD/Altavoz-Bluetooth-Port-til.png"
}

```

Response:

```json
{
  "id": 50,
  "name": "Altavoz Bluetooth Portátil",
  "description": "Altavoz Bluetooth compacto y portátil con excelente calidad de sonido y resistencia al agua, ideal para llevarlo a cualquier parte.",
  "price": 99.99,
  "stockQuantity": 75,
  "categoryName": "Otros",
  "imageUrl": "https://i.ibb.co/LPYY3vD/Altavoz-Bluetooth-Port-til.png",
  "createdAt": "2023-12-29",
  "updatedAt": "2023-12-29"
}
```

## Eliminar un producto

Puedes eliminar un producto agregando el `id` como parámetro: `/products/delete/<id>`

Request:

```sh
[DELETE] https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/delete/50
```

Response:

```json
true
```

> Tenga en cuenta que algunos productos han sido comprados por usuarios, y al eliminarlos, se eliminarán también los pedidos asociados a ellos

> Pronto se agregará la funcionalidad de desactivar productos en lugar de eliminarlos.

## Paginación

En este proyecto, se utiliza un enfoque avanzado y detallado de paginación en las API desarrolladas con Java y Spring Boot. A diferencia de las API estándar que emplean paginación basada en offset, esta implementación ofrece una estructura de respuesta más rica y personalizable.

La paginación se basa en parámetros como `pageNumber` y `pageSize`, pero se amplía al incluir detalles adicionales en la respuesta. Cada respuesta de paginación contiene un objeto `pageable` que proporciona información vital, como el número actual de página (`pageNumber`), el tamaño de la página (`pageSize`), y detalles sobre la ordenación (`sort`). Esto indica si la lista está ordenada o no y la dirección de la ordenación.

Además, se ofrece información completa sobre el conjunto total de datos, como el número total de páginas (`totalPages`) y el total de elementos (`totalElements`). Esto permite a los usuarios comprender el contexto completo del conjunto de datos que están navegando.

La respuesta también indica si la página actual es la primera (`first`) o la última (`last`), y proporciona el número de elementos en la página actual (`numberOfElements`). Esto es especialmente útil para interfaces de usuario donde los usuarios pueden necesitar saber si hay más datos para cargar.

Request:

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all?size=2&page=1
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
    },
    {
      "id": 4,
      "name": "Consola PlayStation 5",
      "description": "Consola de juegos de última generación con gráficos en 4K, SSD ultrarrápido y retrocompatibilidad con juegos de PS4.",
      "price": 499.99,
      "stockQuantity": 100,
      "categoryName": "Electrónica",
      "imageUrl": "https://i.ibb.co/BcqzzgF/Consola-Play-Station-5.png",
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
  "totalPages": 25,
  "totalElements": 50,
  "last": false,
  "size": 2,
  "number": 1,
  "sort": {
    "empty": true,
    "sorted": false,
    "unsorted": true
  },
  "numberOfElements": 2,
  "first": false,
  "empty": false
}
```

### Parámetros de paginación

Para obtener una lista de productos paginada, se deben proporcionar los parámetros `page` y `size` en la URL. Por ejemplo, para obtener las primeras 3 paginas de 10 productos cada una, se debe hacer lo siguiente:

```bash
[GET]  https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all?page=0&size=10
[GET]  https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all?page=1&size=10
[GET]  https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all?page=2&size=10
```

| Request                          | Descripción                        |
| -------------------------------- | ---------------------------------- |
| /products/all?**page=0,size=10** | Retorna los primeros 10 productos. |
| /products/all?**page=1,size=10** | Retorna los productos del 11 al 20 |
| /products/all?**page=2,size=10** | Retorna los productos del 21 al 30 |

Y para obtener los primeros 20 productos, se debe hacer lo siguiente:

| Request                          | Descripción                        |
| -------------------------------- | ---------------------------------- |
| /products/all?**page=0,size=20** | Retorna los primeros 20 productos. |
| /products/all?**page=1,size=20** | Retorna los productos del 21 al 40 |
| /products/all?**page=2,size=20** | Retorna los productos del 41 al 60 |

### Ordenación

La ordenación se puede aplicar a los resultados de la API mediante el parámetro `sort` en la URL. Por ejemplo, para obtener los primeros 10 productos ordenados por nombre, se debe hacer lo siguiente:

```bash
[GET]  https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all?page=0&size=10&sort=name
```

| Request                                    | Descripción                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| /products/all?**page=0,size=10,sort=name** | Retorna los primeros 10 productos ordenados por nombre.  |
| /products/all?**page=1,size=10,sort=name** | Retorna los productos del 11 al 20 ordenados por nombre. |
| /products/all?**page=2,size=10,sort=name** | Retorna los productos del 21 al 30 ordenados por nombre. |

La ordenación también se puede aplicar en orden descendente agregando `desc` al parámetro `sort`. Por ejemplo, para obtener los primeros 10 productos ordenados por nombre en orden descendente, se debe hacer lo siguiente:

```bash
[GET]  https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all?page=0&size=10&sort=name,desc
```

| Request                                         | Descripción                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------- |
| /products/all?**page=0,size=10,sort=name,desc** | Retorna los primeros 10 productos ordenados por nombre en orden descendente.  |
| /products/all?**page=1,size=10,sort=name,desc** | Retorna los productos del 11 al 20 ordenados por nombre en orden descendente. |
| /products/all?**page=2,size=10,sort=name,desc** | Retorna los productos del 21 al 30 ordenados por nombre en orden descendente. |

La ordenación también se puede aplicar a múltiples campos. Por ejemplo, para obtener los primeros 10 productos ordenados por nombre y precio, se debe hacer lo siguiente:

```bash
[GET]  https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all?page=0&size=10&sort=name,price
```

| Request                                          | Descripción                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------- |
| /products/all?**page=0,size=10,sort=name,price** | Retorna los primeros 10 productos ordenados por nombre y precio.  |
| /products/all?**page=1,size=10,sort=name,price** | Retorna los productos del 11 al 20 ordenados por nombre y precio. |
| /products/all?**page=2,size=10,sort=name,price** | Retorna los productos del 21 al 30 ordenados por nombre y precio. |

## Modelo de datos

| Atributo       | Tipo     | Descripción                             |
| -------------- | -------- | --------------------------------------- |
| id             | Number   | El ID del producto.                     |
| name           | String   | El nombre del producto.                 |
| description    | String   | La descripción del producto.            |
| price          | Number   | El precio del producto.                 |
| stock_quantity | Number   | La cantidad de stock del producto.      |
| image_url      | String   | La URL de la imagen del producto.       |
| created_at     | Datetime | La fecha de creación del producto.      |
| updated_at     | Datetime | La fecha de actualización del producto. |
| category_id    | Number   | El ID de la categoría del producto.     |
