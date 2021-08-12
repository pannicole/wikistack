const { resolveSoa } = require('dns');
const express = require('express')
const morgan = require('morgan')
const { db, User, Page } = require('./models');

const wiki = require('./routes/wiki')
const users = require('./routes/users')

const app = express();
const PORT = 3000;

//logging middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(__dirname + "/public"));

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/wiki', wiki)
app.use('/users', users)

//get method
app.get('/', (req, res) =>{
  res.redirect('/wiki');
})



const init = async () =>{
  await db.sync({force: true});
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)

    // db.authenticate()
    // .then(() => {
    //   console.log('connected to the database');
    // })
  });
}

init();

