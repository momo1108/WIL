const express = require('express');
const router = express.Router();
var Users = require('../schemas/user');
var Comments = require('../schemas/comment');

router.get('/', (req, res, next) => {
    res.send('api router');
});
router.get('/users', (req, res, next) => {
    Users.find({}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    })
});
router.post('/users', (req, res, next) => {
    const user = new Users({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
    });
    user.save((err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.status(201).json(result);
        }
    })
});
router.get('/comments/:id', (req, res, next) => {
    Comments.find({commenter: req.params.id}).populate('commenter').exec((err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    })
});
router.post('/comments', (req, res, next) => {
    const comment = new Comments({
        commenter: req.body.id,
        comment: req.body.comment
    });
    comment.save((err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.status(201).json(result);
        }
    })
});
router.patch('/comments/:id', (req, res) => {
    Comments.updateOne({_id:req.params.id}, {comment: req.body.comment},(err,result)=>{
        if(err) console.log(err);
        else{
            console.log(result);
            res.json(result);
        }
    })
});
router.delete('/comments/:id', (req, res) => {
    Comments.remove({_id:req.params.id},(err,result)=>{
        if(err)console.log(err);
        else{
            console.log('성공');
            res.json(result);
        }
    })
});

module.exports = router;