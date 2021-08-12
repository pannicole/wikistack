const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello world, from wiki')
})

router.post('/', (req, res) => {
  res.send('hello world, from POST wiki')
})

router.get('/add', (req, res) => {
  res.send('hello world, from wiki/add')
})
module.exports = router;
