# NgWorkshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

> **Make sure** that you have installed all `node_modules`

## Start Client

- Execute `npm start` for a dev server.
- Navigate to `http://localhost:4200`.

## Start Backend

- Execute `npm run start:server` to start the HTTP-API.
- The API is hosted on `http://localhost:4280`.

|        |Url|Description|
|--------|---------|-----------|
|`GET`   |/notes|Gets all notes|
|`GET`   |/note/:guid |Gets a single note by its GUID|
|`POST`  |/note |Creates a new note|
|`PUT`   |/note |Updates a note|
|`DELETE`|/memo/:guid |Deletes the specified note|