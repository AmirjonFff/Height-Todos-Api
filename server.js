const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv')
const routerTodo = require('./routes/todosRoute');
const routerUser = require('./routes/usersRoute');

env.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(routerTodo)
app.use(routerUser)

PORT = process.env.PORT | 5000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to DB!'))
    .catch((err) => console.log(err))