var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

router.get('/app', function(req, res, next) {
  res.render('articles/app', { title: 'Article' });
});

router.get('/:slug', function(req, res, next) {
  res.render('articles/view', { title: 'xxx' });
});

module.exports = router;