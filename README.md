# Notes.

Это простое, тестовое CRUD приложение - Notes

![Здесь должна быть картинка](https://gist.github.com/professrr/afc36d7b12f11d6919d65ab2c3ebeb85/raw/f49704a6b771a91c4d676cc4adce7872de76fe64/iphone_1.png)
![Здесь должна быть картинка](https://gist.github.com/professrr/afc36d7b12f11d6919d65ab2c3ebeb85/raw/f49704a6b771a91c4d676cc4adce7872de76fe64/iphone_2.png)

## Алиасы

  - [Подготовка и предустановка](#before-start)
  - [Запуск дев версий](#run-dev)
  - [Компиляция продакшена](#run-prod)
  - [API v1 эндпоинты](#api)

## Подготовка и предустановка <a name="before-start"></a>

#### Backend stack:
* Node.js - сервер
* Express - REST API 
* MongoDB - база данных
* Mongoose - драйвер mongodb
```sh
# MongoDB
mongo
use notes
db.createUser(
   {
     user: "user",
     pwd: "password",
     roles: [ "readWrite", "dbAdmin" ]
   }
)

# Node.js сервер
cd backend
npm install
```

#### Frontend stack:
* Vue 3 - лучший фреймворк
* Vue Router 4 - роутинг и редиректы
* Vuex 4 - менеджер/хранилище
* Axios - интеграция REST API
```sh
cd frontend
npm install
```

## Запуск дев версий <a name="run-dev"></a>

#### Backend:
```sh
# MongoDB
mongod --dbpath /db/storage

# Node.js
cd backend
npm run dev
```

#### Frontend:
```sh
cd frontend
npm run serve
```

## Компиляция продакшена <a name="run-prod"></a>

#### Backend:
```sh
# Node.js
cd backend
npm start
```

#### Frontend:
```sh
cd frontend
npm run build
```

## API v1 эндпоинты <a name="api"></a>

#### [GET] /api/v1/notes
* Request (не требует query | payload)

* Response 200
```js
  {
    status: 'success',
    data: [/* Массив заметок */]
  }
```

#### [POST] /api/v1/notes
* Request body
```js
  {
    data: 'Ваша заметка любой длины...'
  }
```

* Response 201
```js
  {
    status: 'success',
    data: {
      _id: '6015bf6f163bdd548d32ef56', // ObjectID
      data: 'Ваша заметка любой длины...',
      ts: 1612038276 // timestamp
    }
  }
```

#### [POST] /api/v1/notes/update
* Request body
```js
  {
    id: '6015bf6f163bdd548d32ef56', // ObjectID
    data: 'Ваша заметка любой длины...'
  }
```

* Response 200
```js
  {
    status: 'success',
    data: {/* Инфо об обновлении данных */}
  }
```

#### [POST] /api/v1/notes/delete
* Request body
```js
  {
    id: '6015bf6f163bdd548d32ef56', // ObjectID
  }
```

* Response 200
```js
  {
    status: 'success',
    data: {/* Инфо об удалении данных */}
  }
```
