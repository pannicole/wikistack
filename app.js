const { resolveSoa } = require('dns');
const express = require('express')
const morgan = require('morgan')

const app = express();
const PORT = 3000;

//logging middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(__dirname + "/public"));

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//get method
app.get('/', (req, res) =>{
  res.send('Hello World!');
})

//listen method
app.listen(PORT, () =>{
  console.log(`App listening in port ${PORT}`)
})
