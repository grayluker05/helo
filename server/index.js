require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();
app.use = (express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DataBase is connected')
})

app.post('/auth/register');
app.post('/auth/login');

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server is running on ${port}`));