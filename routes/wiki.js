const express = require('express')
const router = express.Router()
const {addPage} = require("../views");
const { Page } = require("../models");
const wikipage = require("../views/wikipage");




router.get('/', (req, res) => {
  res.send('hello world, from wiki')
})


router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  try {
    const page = await Page.create({
      title: req.body.Title,
      content: req.body.Content,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get('/add', (req, res) => {
  res.send(addPage());
})

router.get('/:slug', async (req, res, next) => {
  const pageInstance = await Page.findOne({
    where: {slug: req.params.slug}
  })

 res.send(wikipage(pageInstance));
});

module.exports = router;
