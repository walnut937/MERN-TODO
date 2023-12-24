const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./src/Database/db')


//routes
const addTaskRoute = require('./src/Routes/addTaskRoute')
const tasksRoute = require('./src/Routes/getTaskRoute')
const getOneTask = require('./src/Routes/getOneTask')
const updateRoute = require('./src/Routes/updateRoute')
const deleteTask = require('./src/Routes/deleteTask')

const PORT = process.env.PORT
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', addTaskRoute);
app.use('/', tasksRoute);
app.use('/', getOneTask);
app.use('/', updateRoute)
app.use('/', deleteTask)

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening in PORT ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err.message + ' occurred');
  });
  