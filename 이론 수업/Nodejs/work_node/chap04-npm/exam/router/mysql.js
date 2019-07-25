var express = require('express');
var mysql = require('mysql');
const dbconfig = require('./dbconfig');
let connection = mysql.createConnection(dbconfig);
connection.connect();


module.exports = function (hasher) {
    var router = express.Router();

    router.get('/test', (req, res) => {
        // let connection = mysql.createConnection(dbconfig);
        // connection.connect();

        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
            res.json(results);

            // connection.end();
        });
    });

    router.get('/getuser', (req, res) => {
        // let connection = mysql.createConnection(dbconfig);
        // connection.connect();

        connection.query('SELECT * FROM user', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
            res.json(results);

            // connection.end();
        });
    });

    router.get('/adduser_form', (req, res) => {
        res.render('signin_form2.html');
    });

    router.post('/adduser', (req, res) => {
        // let connection = mysql.createConnection(dbconfig);
        // connection.connect();
        console.log(req.body);
        let userid = req.body.id;
        let name = req.body.name;
        let company = req.body.company;
        let address = req.body.address;
        hasher({
            // salt는 임의로 지정해주고 나중에 로그인 할 때 user 변수에 저장된 salt값을 불러온다.
            password: req.body.password
        }, (err, pass, salt, hash) => {
            if (err) {
                console.log('ERR: ', err);
                res.redirect('/signup_form');
            }
            const stmt = `INSERT INTO user (id, name, company, address, salt, password) VALUES (?, ?, ?, ?, ?, ?)`;
            connection.query(stmt, [userid, name, company, address, salt, hash], function (error, results, fields) {
                if (error) throw error;
                res.json(results);

                // connection.end();
            });

        });
        // res.send(userid);
    })

    router.get('/login_form', (req,res)=>{
        res.render('login_form2.html');
    })

    router.post('/login', (req,res)=>{
        let userid = req.body.id;
        // let connection = mysql.createConnection(dbconfig);
        const stmt = `SELECT * FROM user WHERE id = ?`;
        connection.query(stmt, [userid], function (error, results, fields) {
            if (error) throw error;

            if(results[0]){
                console.log(results);
                const user = results[0];
                hasher({
                    // salt는 임의로 지정해주고 나중에 로그인 할 때 user 변수에 저장된 salt값을 불러온다.
                    salt: user.salt,
                    password: req.body.password
                }, (err, pass, salt, hash) => {
                    if (err) {
                        console.log('ERR: ', err);
                        res.redirect('/signup_form');
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
            // connection.end();
        });
    })

    router.get('/router', (req, res) => {
        console.log('/mysql/router');
        res.send('<h1>/mysql/router</h1>');
    });


    return router;
}