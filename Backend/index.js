const express = require('express');
const cors = require('cors');

const moongose = require('mongoose');
const UserRoute = require('./route/userroute.js')
const router = require('./route/route');
const app = express()
const port = 8003

moongose.connect("mongodb://127.0.0.1:27017/bookstore").then(console.log("server connected in moongose"));
app.use(cors());
app.use(express.json());

app.use("/book" ,router);
app.use("/user" , UserRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

