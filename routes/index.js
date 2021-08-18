var express = require('express');
var Blog = require('../models/blog');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { blogs: result });
    })
    .catch((err) => {
        console.log(err)
    })
});

/* GET new post page. */
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

/* Create new post. */
router.post('/create', function(req, res, next) {
    const blog = new Blog ({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body
    })

    blog.save()
    .then((result) => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err)
    })
});

/* DELETE post page. */
router.delete('/pages/:id', (req, res) => {
    const id = req.params.id

    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/' })
    })
    .catch((err) => {
        console.log(err)
    })
})

/* GET individual post. */
router.get('/pages/:id', function(req, res, next) {
    const id = req.params.id
    Blog.findById(id)
        .then((result) => {
            console.log(result)
            res.render('page', result);
        })
        .catch((err) => {
            console.log(err)
        })
});

module.exports = router;
