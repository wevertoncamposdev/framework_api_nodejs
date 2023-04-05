# Framework Api Nodejs
 
### Sequelize CLI

##### Migration
1. Create Migration
2. Revert Most Recent
3. Revert All

```
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all
```

##### Seeds
1. Create Seeds
2. Running Seeds
3. Revert All

```
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
```