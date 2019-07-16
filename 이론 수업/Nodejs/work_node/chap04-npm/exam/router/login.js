const express = require('express');
// express.Router() 가 req, res를 땡겨와줘서 라우터 모듈에서도 사용할 수 있게 해주는 역할을 시켜준다.
// const app = express(); 같은 역할을 해주기 때문에 router.get을 사용할 경우 req, res를 땡겨쓸수있다.
module.exports = function (hasher, fs, sampleUserList, multer, path) {
    const router = express.Router();
    var profilestorage = multer.diskStorage({
        // 서버에 저장할 폴더
        destination: function (req, file, cb) {
            cb(null, 'uploads/profile/');
        },
        // 서버에 저장할 파일명
        filename: function (req, file, cb) {
            let ext = file.originalname.substring(file.originalname.lastIndexOf('.')+1);
            cb(null, `${req.body.name}.${ext}`);
        }
    })
    var imgFileFilter = function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true);
    }
    var profileupload = multer({
        storage: profilestorage,
        fileFilter: imgFileFilter,
        limits: {
            files: 10,
            fileSize: 3 * 1024 * 1024
        }
    });
    router.get('/', (req, res) => {
        res.render('index.html');
        a=0;
    })

    router.get('/signin_form', (req, res) => {
        console.log('회원가입신청');
        res.render('signin_form.html');
    })

    router.post('/signin', profileupload.single('profileimg'), (req, res) => {
        // console.log(req.body);
        // 회원가입
        let userid = req.body.id;
        let ext = req.file.originalname.split('.');

        if (sampleUserList[userid]) {
            console.log('같은 아이디로 회원가입 요청 : 거부');
            res.redirect('/signin_form');
            return;
        }
        let password = req.body.password;
        console.log('userid = ', userid);
        console.log('password = ', password);

        hasher({
            // salt는 임의로 지정해주고 나중에 로그인 할 때 user 변수에 저장된 salt값을 불러온다.
            password: req.body.password
        }, (err, pass, salt, hash) => {
            if (err) {
                console.log('ERR: ', err);
                res.redirect('/signup_form');
            }
            let user = {
                userid: userid,
                password: hash,
                originpass: pass,
                salt: salt,
                name: req.body.name,
                company: req.body.company,
                address: req.body.address,
                carsell: 0,
                carsellc: 0,
                profileimg: `/files/profile/${req.body.name}.${ext[1]}`,
            }
            sampleUserList[userid] = user;
            fs.writeFileSync('data/userlist.json', JSON.stringify(sampleUserList, null, 4));
            console.log('user added : ', user.userid);
            res.redirect('/login_form');
        });
    });

    router.get('/login_form', (req, res) => {
        res.render('login_form.html');
    })

    router.post('/login', (req, res) => {
        console.log(req.body);
        let userid = req.body.id;
        let password = req.body.password;
        console.log('userid = ', userid);
        console.log('password = ', password);
        console.log('userlist = ', sampleUserList);

        let user = sampleUserList[userid];
        if (user) {
            console.log('[found] userid = ', userid);
            hasher({
                password: password,
                salt: user.salt
            }, function (err, pass, salt, hash) {
                if (err) {
                    console.log('ERR : ', err);
                    // req.flash('fmsg', '오류가 발생했습니다.');
                    res.redirect('/login_form');
                }
                if (hash === user.password) {
                    console.log('INFO : ', userid, ' 로그인 성공')
                    req.session.user = sampleUserList[userid];
                    // 세션 정보가 한번 저장이 되면 세션 정보가 변경되지 않는 이상 
                    // 다시 req.session.save 를 해줄 필요가 없다.
                    req.session.save(function () {
                        res.redirect('/carlist');
                    })
                } else {
                    // req.flash('fmsg', '패스워드가 맞지 않습니다.');
                    console.log('비밀번호가 틀렸습니다.');
                    res.redirect('/login_form');
                }
            });
        } else {
            // req.flash('fmsg', '아이디가 없습니다.');
            res.redirect('/login_form');
        }
    })

    router.get('/logout', (req, res) => {
        req.session.destroy(function () {
            res.redirect('/');
        });
    })

    return router;
}


// module.exports = router;