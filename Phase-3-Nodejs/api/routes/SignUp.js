const express = require('express');
const router = express.Router();
router.get('/' , (req,res,next) =>{
    res.status(200).json({
        messahe: 'it worked'
    });
});


router.post('/' , (req,res,next) =>{
    res.status(200).json({
        messahe: 'it worked'
    });
});

module.exports = router;