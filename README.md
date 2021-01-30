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
* Vue 3 - база
* Vue Router 4 - роутинг и редиректы
* Vuex 4 - менеджер/хранилище
* Axios - интеграция REST API
```
cd frontend
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
