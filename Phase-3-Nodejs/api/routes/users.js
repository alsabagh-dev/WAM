const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/user');

mongoose.Promise = global.Promise;
mongoose.connect('mogoodb://localhost:27017/ERPApp');


router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        if(docs.length >= 0){
            res.status(200).json(docs);
        }else{
            res.status(400).json({message: 'No users found!'});
        }

    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});

    }) ;
});

router.post('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    });
    product
    .save()
    .then( res.status(200).json({
        message: ' Handling POST request for users',
        createdUser: user
    }))
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });

});

router.get('/:userID', (req, res, next) => {
    const id = req.params.userID;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log('From database: ', doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message: 'No User found for this ID'});
        }
    }
    )
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:userID', (req, res, next) => {
    const id = req.params.userID;
    Product.remove({_id: id})
    .exec()
    .then(result => res.status(200).json({result}))
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });

    });
    res.status(200).json({
        message: 'Deleted user!'
    });
});

module.exports = router;
