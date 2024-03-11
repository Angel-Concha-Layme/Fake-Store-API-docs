---
title: Detalles del pedido
description: Endpoints para obtener los detalles de un pedido
---

## Obtener los detalles de un pedido

Para obtener los detalles de un pedido debes enviar el id del pedido a `/orders-details/all/{orderId}`

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders-details/all/1
```

Response:

```sh
[
    {
        "id": 1,
        "orderId": 1,
        "productId": 2,
        "quantity": 10,
        "unitPrice": 899.99
    },
    {
        "id": 2,
        "orderId": 1,
        "productId": 4,
        "quantity": 20,
        "unitPrice": 499.99
    }
]
```

## Actualizar los detalles de un pedido

Para actualizar los detalles de un pedido debes enviar un objeto como el siguiente a `/orders-details/{orderDetailId}`

```sh
[PUT] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders-details/1

# Body
{
    "productId": 2,
    "quantity": 15,
}
```

> Solo un usuario autenticado (con un JWT válido) puede actualizar los detalles de su pedido.

> El JWT debe ser incluido en el header Authorization de la petición.

> Si el JWT no es válido, el servidor responderá con un error 401.

> Si el JWT es válido, el servidor responderá con un 200 OK y los detalles del pedido actualizados.

Response:

```sh
{
    "id": 1,
    "orderId": 1,
    "productId": 2,
    "quantity": 15,
    "unitPrice": 899.99
}
```

---

> Una vez hecho este cambio, los detalles del pedido se actualizarán y se podrá obtener los detalles del pedido actualizado.

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders-details/all/1
```

Response:

```sh
[
    {
        "id": 1,
        "orderId": 1,
        "productId": 2,
        "quantity": 15,
        "unitPrice": 899.99
    },
    {
        "id": 2,
        "orderId": 1,
        "productId": 4,
        "quantity": 20,
        "unitPrice": 499.99
    }
]
```

---

> Pero también se actualizará el pedido, antes de actualizar los detalles del pedido teniamos:

```sh
{
    "id": 1,
    "orderDate": "2023-12-30",
    "orderStatus": "PENDING",
    "total": 18999.7
}
```

> Después de actualizar los detalles del pedido tenemos:

```sh
GET https://fake-store-api-2no73ornoa-uc.a.run.app/api/orders/1
```

```sh
{
    "id": 1,
    "orderDate": "2023-12-30",
    "orderStatus": "PENDING",
    "total": 23499.65
}
```

> De esta manera, el total del pedido se actualiza automáticamente cuando se actualizan los detalles del pedido.

- Para que todo funcione bien, se realizan verificaciones para validar los datos que se envían en la petición.
- Se valida el formato y también la existencia de los datos que se envían en la petición.

---

## Modelo de datos

| Atributo  | Tipo   | Descripción                                                |
| --------- | ------ | ---------------------------------------------------------- |
| id        | Number | Identificador único del detalle del pedido                 |
| quantity  | Number | Cantidad de un producto en el pedido                       |
| unitPrice | Number | Precio unitario de un producto en el pedido                |
| orderId   | Number | Identificador único del pedido al que pertenece el detalle |
| productId | Number | Identificador único del producto                           |


> Al organizar los datos de esta manera, se puede tener un pedido con varios detalles y cada detalle puede tener un producto diferente.

> De esta manera, un pedido puede tener varios productos, estos productos pueden ser diferentes y cada producto puede tener una cantidad diferente, además podemos editar los detalles de un pedido y el total del pedido se actualizará automáticamente.

