var express = require('express');

module.exports = ()=>{
    var router = express.Router();

    router.get('/carlist',(req,res)=>{
        res.json(sampleCarList);
    })

    return router;
}