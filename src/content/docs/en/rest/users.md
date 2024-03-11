---
title: Usuarios
description: Endpoints para usuarios
---

## Obtener todos los usuarios

Puedes acceder a la lista de 3 usuarios usando el endpoint `/users/all`.

Request:

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/users/all
```

Response:

```json
{
  "content": [
    {
      "id": 1,
      "username": "Juan",
      "email": "juan@gmail.com",
      "avatar": "https://i.ibb.co/3RT7L1p/Juan.jpg",
      "role": "CUSTOMER",
      "createdAt": "2023-12-29"
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

## Obtener un usuario (por ID)

Puedes obtener un usuario por su `id` usando el endpoint `/users/{id}`

Request:

```sh
[GET] https://fake-store-api-2no73ornoa-uc.a.run.app/api/users/1
```

Response:

```json
{
  "id": 1,
  "email": "john@mail.com",
  "password": "changeme",
  "name": "Jhon",
  "role": "customer",
  "avatar": "https://i.imgur.com/LDOO4Qs.jpg"
}
```

## Crear un usuario

Puedes crear un nuevo usuario enviando un objeto como el siguiente a `/users/create`

Request:

```sh
[POST] https://fake-store-api-2no73ornoa-uc.a.run.app/api/users/create
# Body
{
  "username": "Tomas",
  "password": "tomas",
  "email": "tomas@gmail.com",
  "avatar": "https://i.imgur.com/yhW6Yw1.jpg",
  "role": "CUSTOMER"
}
```

Response:

```json
{
  "id": 11,
  "username": "Tomas",
  "email": "tomas@gmail.com",
  "avatar": "https://i.imgur.com/yhW6Yw1.jpg",
  "role": "CUSTOMER",
  "createdAt": "2023-12-30"
}
```

> Note que la contraseña no está encriptada. La contraseña se encripta automáticamente en el servidor.

## Actualizar un usuario

Puedes actualizar un usuario enviando un objeto como el siguiente y agregando el `id` como parámetro: `/users/{id}`

Request:

```sh
[PUT] https://fake-store-api-2no73ornoa-uc.a.run.app/api/users/1
# Body
{
  "username": "Angel",
  "email": "angel@gmail.com"
}
```

Response:

```json
{
  "id": 1,
  "username": "Angel",
  "email": "angel@gmail.com",
  "avatar": "https://i.imgur.com/LDOO4Qs.jpg",
  "role": "CUSTOMER",
  "createdAt": "2023-12-29"
}
```

> Note que solo se pueden actualizar los campos `username` y `email`. Los demás campos no se pueden actualizar. (la contraseña si, pero con otro endpoint)

## Check the email

Puedes verificar si un correo electrónico ya está registrado en la API.

Request:

```sh
[POST] https://fake-store-api-2no73ornoa-uc.a.run.app/api/users/is-available
# Body
{
  "email": "Rigoberto@mail.com"
}
```

Response:

```json
{
  "isAvailable": false
}
```

Esta característica es muy útil para funciones como mostrar un mensaje en un formulario y verificar el correo electrónico antes de crear un usuario. Por ejemplo:

![Example](https://i.ibb.co/6HgnHfw/danger.jpg)

---

## Modelo de datos

| Atributo   | Tipo     | Descripción                                                            |
| ---------- | -------- | ---------------------------------------------------------------------- |
| id         | Number   | El ID del usuario                                                      |
| username   | String   | El nombre de usuario                                                   |
| password   | String   | La contraseña del usuario (esta encriptada dentro de la base de datos) |
| email      | String   | El correo electrónico del usuario                                      |
| created_at | Datetime | La fecha de creación del usuario                                       |
| avatar     | String   | La URL de la imagen de perfil del usuario                              |
| role       | String   | El rol del usuario (CUSTOMER o ADMIN)                                  |


* El ID del usuario es un número entero generado automáticamente por la base de datos.
* El nombre de usuario debe tener al menos 3 caracteres y no puede contener caracteres especiales.
* La contraseña debe tener al menos 8 caracteres.
* El correo electrónico debe ser un correo electrónico válido y no debe estar registrado en la base de datos.
* La fecha de creación se genera automáticamente cuando se crea el usuario.
* La URL de la imagen de perfil debe ser una URL válida.
* El rol del usuario debe ser `CUSTOMER` o `ADMIN`.

