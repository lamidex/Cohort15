
//const express = require ('express');
//const app = express();
//const port = 4000;
//app.get('/get', (req, res) =>{
  //res.send("Hello, world!");
//})
//app.post('/post',(req, res) =>{
  //res.send("You are on a post page");
//})
//app.put('/put', (req, res) =>{
//  res.send("You are on a put page");
//})
//app.patch('/patch', (req, res) => {
  //res.send("You are on a patch page");
//})
//app.delete('/delete', (req, res) => {
  //res.send("You are on a delete page");
//} )

//app.listen(port, () => {
  //console.log(`server is running on port ${port}`);
  
//})


const express = require('express');
const morgan = require('morgan');
const connectDb = require('./config/db');
const router = require('./routes/cars.routes');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1', router)




app.listen(port, ()=> {
  connectDb;
  console.log(`The server is running on port ${port}`);
  });

