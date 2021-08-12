const express = require('express')
const router = express.Router()
const {addPage} = require("../views");
const { Page } = require("../models");

router.get('/', (req, res) => {
  res.send('hello world, from wiki')
})

router.post('/', (req, res) => {
  res.send('hello world, from POST wiki')
})

router.get('/add', (req, res) => {
  res.send(addPage());
})
module.exports = router;
