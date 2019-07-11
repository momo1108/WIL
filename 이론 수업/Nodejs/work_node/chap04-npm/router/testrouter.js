var express = require('express');

var router = express.Router();

router.get('/router',(req,res)=>{
    console.log('/test/router');
    res.send('<h1>Router test</h1>');
})

module.exports = router;