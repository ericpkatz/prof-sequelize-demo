const router = require('express').Router();

module.exports = router;

router.get('/', (req, res, next)=> {
  res.send('TODO: show users');
});

router.post('/', (req, res, next)=> {
  res.send('TO DO: create a user');
});

router.get('/add', (req, res, next)=> {
  res.send('TO DO: a user form');
});

router.get('/:id', (req, res, next)=> {
  res.send('TODO: Show user');
});
