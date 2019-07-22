const express = require('express');

module.exports = function (fs, cardscr, sampleUserList) {
    const router = express.Router();

    if (fs.existsSync('data/carlist.json')) {
        let rawdata2 = fs.readFileSync('data/carlist.json');
        //     그 후 JSON.parse를 통해 다시 json 포맷을 자바스크립트 포맷으로 변경 후 Userlist에 저장해주자.
        cardscr = JSON.parse(rawdata2);
        console.log(cardscr);
        //     지금 상태의 정보들은 비밀번호 암호화가 진행되지 않은 정보들이기 때문에 사용 불가능하다.
        //     뒤에서 푸쉬를 하고 난 후 다시 fs.writeFileSync를 해주자.
    }

    router.get('/carlist', (req, res) => {
        // cookie의 user 정보 가져와서 carlist.html 에 뿌려주기
        console.log(sampleUserList);
        if (req.session.user) {
            console.log('로그인된 사용자');
            res.redirect('/react/carlist');
        } else {
            console.log('로그인 안됨. 로그인 페이지로 이동');
            res.redirect('/react/login_form');
        }
    })

    router.post('/carimg', (req, res) => {
        let brand = req.body.brand;
        let size = req.body.size;
        let found = cardscr.filter(function (element) {
            if (element.brand === brand && !size) {
                return element;
            }
            if (element.brand === brand && element.size === size) {
                return element;
            }
        });
        res.json(found);
    })
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // 클라이언트로부터 구분 인자를 받아오기 위해서는 semantic url을 사용하자.
    router.get('/cinfo/:model', (req, res) => {
        let carModel = req.params.model;
        console.log(carModel);
        let found = cardscr.find(function (element) {
            if (element.model === carModel) {
                return element;
            }
        });
        // 변수를 키로 설정할때는 []를 쓰자 제발 . 말고 제발
        // res.render('carinfo.html', { cardetail: found });
        res.redirect('/react/carinfo',{cardetail: found});
    })

    router.post('/cinfo', (req, res) => {
        if (req.session.user) {
            let carModel = req.body.modelsearch;
            console.log(cardscr);
            let found = cardscr.find(function (element) {
                if (element.model === carModel) {
                    return element;
                }
            });
            if (!found) {
                res.redirect('/');
                a++;
            }
            res.redirect('/react/carinfo', { cardetail: found });
        } else {
            console.log('로그인 안됨. 로그인 페이지로 이동');
            res.redirect('/react/login_form');
        }
    })

    router.get('/chistory/:model', (req, res) => {
        let carModel = req.params.model;
        console.log(carModel);
        let found1 = cardscr.find(function (element) {
            if (element.model === carModel) {
                return element;
            }
        });
        console.log(found1.seller);
        let found2 = sampleUserList[found1.seller];
        // 변수를 키로 설정할때는 []를 쓰자 제발 . 말고 제발
        res.redirect('/react/carhistory', {cardetail: found1, userdetail: found2});
    })

    router.get('/carreg',(req,res)=>{
        res.redirect('/react/carreg');
    })

    router.get('/api/carlist',(req,res)=>{
        res.json(cardscr);
    })
    return router;
}


// module.exports = router;