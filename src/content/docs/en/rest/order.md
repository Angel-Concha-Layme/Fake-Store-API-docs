---
title: Pedidos
description: Endpoints para trabajar con pedidos
---

## Crear un pedido

Para crear un pedido debes enviar un objeto como el siguiente a `/orders/create`

Request:

```sh
[POST] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders/create

# Body
{
    "orderDetails": [
        {
            "id": 2,
            "quantity": 10
        },
        {
            "id": 4,
            "quantity": 20
        }
    ]
}
```

> Solo un usuario autenticado (con un JWT válido) puede crear un pedido.

> El JWT debe ser incluido en el header Authorization de la petición.

> Si el JWT no es válido, el servidor responderá con un error 401.

> Si el JWT es válido, el servidor responderá con un 200 OK y el pedido creado.

Response:

```sh
{
    "id": 1,
    "orderDate": "2023-12-30",
    "orderStatus": "PENDING",
    "total": 18999.699999999997
}
```

## Obtener un pedido (un usuario obtiene su pedido)

Para obtener un pedido debes enviar el id del pedido a `/orders/{orderId}`

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders/1
```

> Solo los usuarios autenticados (con un JWT válido) pueden obtener su pedido.

> El JWT debe ser incluido en el header Authorization de la petición.

> Si el JWT no es válido, el servidor responderá con un error 401.

> Si el JWT es válido, el servidor responderá con un 200 OK y el pedido solicitado.

Response:

```sh
{
    "id": 1,
    "orderDate": "2023-12-30",
    "orderStatus": "PENDING",
    "total": 18999.7
}
```

## Obtener todos los pedidos (un usuario obtiene sus pedidos)

Para obtener todos los pedidos de un usuario debes enviar el id del usuario a `/orders/all`

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders/all
```

> Solo los usuarios autenticados (con un JWT válido) pueden obtener sus pedidos.

> El JWT debe ser incluido en el header Authorization de la petición.

> Si el JWT no es válido, el servidor responderá con un error 401.

> Si el JWT es válido, el servidor responderá con un 200 OK y los pedidos solicitados.

Response:

```sh
{
    "content": [
        {
            "id": 1,
            "orderDate": "2023-12-30",
            "orderStatus": "PENDING",
            "total": 18999.7
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

- Al usar la interfaz pageable, puedes enviar los siguientes parámetros en la url para obtener los pedidos paginados:

  - `page`: número de página (por defecto es 0)
  - `size`: tamaño de la página (por defecto es 5)

- Además, puedes enviar los siguientes parámetros en la url para obtener los pedidos ordenados:
  - `sort`: nombre de la propiedad por la que quieres ordenar (por defecto es `id`)
  - `direction`: dirección del ordenamiento (por defecto es `ASC`)

## Cancelar un pedido (un usuario cancela su pedido)

Para cancelar un pedido debes enviar el id del pedido a `/orders/cancel/{orderId}`

```sh
[PUT] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders/cancel/1
```

> Solo los usuarios autenticados (con un JWT válido) pueden cancelar su pedido.

> El JWT debe ser incluido en el header Authorization de la petición.

> Si el JWT no es válido, el servidor responderá con un error 401.

> Si el JWT es válido, el servidor responderá con un 200 OK y el pedido cancelado.

Response:

```sh
{
    "id": 1,
    "orderDate": "2023-12-30",
    "orderStatus": "CANCELLED",
    "total": 18999.7
}
```

## Retomar un pedido (un usuario retoma su pedido)

Para retomar un pedido debes enviar el id del pedido a `/orders/retain/{orderId}`

```sh
[PUT] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders/retain/1
```

> Solo los usuarios autenticados (con un JWT válido) pueden retomar su pedido.

> El JWT debe ser incluido en el header Authorization de la petición.

> Si el JWT no es válido, el servidor responderá con un error 401.

> Si el JWT es válido, el servidor responderá con un 200 OK y el pedido retomado.

Response:

```sh
{
    "id": 1,
    "orderDate": "2023-12-30",
    "orderStatus": "PENDING",
    "total": 18999.7
}
```

## Completar un pedido (un usuario completa su pedido)

Para completar un pedido debes enviar el id del pedido a `/orders/complete/{orderId}`

```sh
[PUT] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders/complete/1
```

> Solo los usuarios autenticados (con un JWT válido) pueden completar su pedido.

> El JWT debe ser incluido en el header Authorization de la petición.

> Si el JWT no es válido, el servidor responderá con un error 401.

> Si el JWT es válido, el servidor responderá con un 200 OK y el pedido completado.

Response:

```sh
{
    "id": 1,
    "orderDate": "2023-12-30",
    "orderStatus": "COMPLETED",
    "total": 18999.7
}
```

## Modelo de datos

| Atributo     | Tipo     | Descripción                                          |
| ------------ | -------- | ---------------------------------------------------- |
| id           | Number   | El id del pedido                                     |
| order_date   | Datetime | La fecha del pedido                                  |
| order_status | String   | El estado del pedido (PENDING, CANCELLED, COMPLETED) |
| total        | Number   | El total del pedido                                  |
| user_id      | Number   | El id del usuario que realizó el pedido              |

## Proximas funcionalidades

- Endpoints para administrar pedidos (obtener todos los pedidos, obtener un pedido, cancelar un pedido, retomar un pedido, completar un pedido).
  - Los administradores pueden realizar estas acciones sobre cualquier pedido, los usuarios solo pueden realizar estas acciones sobre sus propios pedidos.
