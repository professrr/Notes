# Notes.

Это простое, тестовое CRUD приложение - Notes

![Здесь должна быть картинка](https://gist.github.com/professrr/afc36d7b12f11d6919d65ab2c3ebeb85/raw/f49704a6b771a91c4d676cc4adce7872de76fe64/iphone_1.png)
![Здесь должна быть картинка](https://gist.github.com/professrr/afc36d7b12f11d6919d65ab2c3ebeb85/raw/f49704a6b771a91c4d676cc4adce7872de76fe64/iphone_2.png)

## Подготовка и предустановка

### Backend stack:
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

### Frontend stack:
* Vue 3 - лучший фреймворк
* Vue Router 4 - роутинг и редиректы
* Vuex 4 - менеджер/хранилище
* Axios - интеграция REST API
```sh
cd frontend
npm install
```

## Запуск дев версий

### Backend:
```sh
# MongoDB
mongod --dbpath /db/storage

# Node.js
cd backend
npm run dev
```

### Frontend:
```sh
cd frontend
npm run serve
```

## Компиляция продакшена

### Backend:
```sh
# Node.js
cd backend
npm start
```

### Frontend:
```sh
cd frontend
npm run build
```