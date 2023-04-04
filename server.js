const express = require('express');
const sequelize = require('./database/db');
const router = require('./routes/routes')(express, sequelize);
const app = express();
const port = 3000;

//definir rotas
app.use(router);

sequelize.sync().then((connect) => {
    app.listen(port, () => {
        console.log('Server in runnig');
    });
});