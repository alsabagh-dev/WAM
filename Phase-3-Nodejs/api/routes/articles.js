const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


mongoose.Promise = global.Promise;
mongoose.connect('mogoodb://localhost:27017/ERPApp');

const Article = require('../models/article')

router.get('/', (req, res, next) => {
    Article.find()
    .exec()
    .then(docs => {
        console.log(docs);
        if(docs.length >= 0){
            res.status(200).json(docs);
        }else{
            res.status(400).json({message: 'No Articles found!'});
        }

    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});

    }) ;
});

router.post('/', (req, res, next) => {
    const article = new Article({
        _id: new mongoose.Types.ObjectId,
        text: req.body.text,
        author: req.body.author,
    });
    Article
    .save()
    .then( res.status(200).json({
        message: ' Handling POST request for articles',
        createdArticle: article
    }))
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.get('/:articleID', (req, res, next) => {
    const id = req.params.articleID;
    Article.findById(id)
    .exec()
    .then(doc => {
        console.log('From database: ', doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message: 'No Article found for this ID'});
        }
    }
    )
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:articleID', (req, res, next) => {
    const id = req.params.articleID;
    Article.remove({_id: id})
    .exec()
    .then(result => res.status(200).json({result}))
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });

    });
    res.status(200).json({
        message: 'Deleted Article!'
    });
});

module.exports = router;
