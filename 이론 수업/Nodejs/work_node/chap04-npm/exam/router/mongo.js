var express = require('express');
const mongoose = require('mongoose');
var Users = require('../schemas/user');


module.exports = function (hasher) {
    var router = express.Router();

    router.get('/', (req, res) => {
        res.render('signin_form3.html');
    });

    router.post('/adduser', (req, res) => {
        // let connection = mysql.createConnection(dbconfig);

        console.log(req.body);
        hasher({
            // salt는 임의로 지정해주고 나중에 로그인 할 때 user 변수에 저장된 salt값을 불러온다.
            password: req.body.password
        }, (err, pass, salt, hash) => {
            if (err) {
                console.log('ERR: ', err);
                res.redirect('/mongo');
            }
            const user = new Users({
                userid: req.body.id,
                password: hash,
                originpass: pass,
                salt: salt,
                name: req.body.name,
                company: req.body.company,
                address: req.body.address,
            });
            user.save((err,result)=>{
                if(err) console.log(err);
                console.log(result);
                res.redirect('/');
            })
        });
        // res.send(userid);
    })

    router.get('/login_form', (req,res)=>{
        res.render('login_form3.html');
    })

    router.post('/login', (req,res)=>{
        Users.find({userid:req.body.id},(err,result)=>{
            if(err)console.log(err)
            else {
                if(result[0]){
                    console.log(result);
                    const user = result[0];
                    hasher({
                        // salt는 임의로 지정해주고 나중에 로그인 할 때 user 변수에 저장된 salt값을 불러온다.
                        salt: user.salt,
                        password: req.body.password
                    }, (err, pass, salt, hash) => {
                        if (err) {
                            console.log('ERR: ', err);
                            res.redirect('/mongo/login_form');
                        }
                        if(hash === user.password){
                            res.redirect('/');
                        } else {
                            res.send('비밀번호를 틀리셨네요 ^^');
                        }
                    });
                } else {
                    res.send('유저 정보가 존재하지 않습니다.');
                }
            }
        })
        
        // if (results[0]) {
        //     console.log(results);
        //     const user = results[0];
        //     hasher({
        //         // salt는 임의로 지정해주고 나중에 로그인 할 때 user 변수에 저장된 salt값을 불러온다.
        //         salt: user.salt,
        //         password: req.body.password
        //     }, (err, pass, salt, hash) => {
        //         if (err) {
        //             console.log('ERR: ', err);
        //             res.redirect('/signup_form');
        //         }
        //         if (hash === user.password) {
        //             res.redirect('/');
        //         } else {
        //             res.send('비밀번호를 틀리셨네요 ^^');
        //         }
        //     });
        // } else {
        //     res.send('유저 정보가 존재하지 않습니다.');
        // }
        
    })

    router.get('/router', (req, res) => {
        console.log('/mysql/router');
        res.send('<h1>/mysql/router</h1>');
    });


    return router;
}