const express = require('express');
require('dotenv').config();
const sequelize = require('./database/db');
const router = require('./routes/routes')(express, sequelize);
const app = express();

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// definir rotas
app.use(router);

sequelize.sync().then((connect) => {
    app.listen(process.env.PORT_SERVER, () => {
        console.log('Server in runnig');
    });
});