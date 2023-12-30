---
title: Autorización con JWT
description:  Endpoints para autorización con JWT
---

## Autenticación

Puedes hacer login enviando un objeto como el siguiente a `/login`


Request:

```sh
[POST] https://api.escuelajs.co/api/v1/auth/login
# Body
{
    "email": "angel@gmail.com",
    "password": "angel1234"
}
```

> Si el email y la contraseña no coinciden, el servidor responderá con un error 401. 

> Si el email y la contraseña coinciden, el servidor respondera con un 200 OK y incluirá en el Header el bearer token. 

> El bearer token es un JWT que contiene la información del usuario y tiene una duración de 100 horas.

> El bearer token debe ser incluido en el header de todas las peticiones que requieran autenticación (realizar pedidos, cambiar contraseña, etc).


Response:

```sh 
HTTP/1.1 200 OK
Content-Type: application/json
Authorization: Bearer <tu_token_jwt> 
X-Content-Type-Options: nosniff
X-XSS-Protection: 0
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Pragma: no-cache
Expires: 0
X-Frame-Options: DENY
Date: Sat, 30 Dec 2023 17:16:17 GMT
...
```


El Bearer `<tu_token_jwt>` debe ser incluido en el header Authorization de todas las peticiones que requieran autenticación.




