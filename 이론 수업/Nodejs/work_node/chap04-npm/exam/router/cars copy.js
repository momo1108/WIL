const express = require('express');

module.exports = function (fs, imagelist, cardscr, sampleUserList) {
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
        if (req.session.user) {
            console.log('로그인된 사용자');
            res.render('carlist.html');
        } else {
            console.log('로그인 안됨. 로그인 페이지로 이동');
            res.redirect('/login_form');
        }
    })

    router.get('/carinfo', (req, res) => {
        if (req.session.user) {
            console.log('차 정보 확인');
            res.render('carinfo.html')
        } else {
            console.log('로그인 안됨. 로그인 페이지로 이동');
            res.redirect('/login_form');
        }
    })

    router.get('/carhistory', (req, res) => {
        if (req.session.user) {
            console.log('차 정보 확인');
            res.render('carhistory.html')
        } else {
            console.log('로그인 안됨. 로그인 페이지로 이동');
            res.redirect('/login_form');
        }
    })

    router.post('/carimg', (req, res) => {
        console.log(req.body);
        imagelist = [];
        if (req.body.company == '벤츠' && req.body.size == '경형') {
            res.json(imagelist);
            return;
        }
        // 소형 1개 1
        if (req.body.company == '벤츠' && req.body.size == '소형') {
            imagelist.push(`<div class='mercedes'><img src='image/m1.png' width='100%'><div class="overlay"><a href="/cinfo/${cardscr[0].model}">정보 조회</a>│<a href="/chistory/${cardscr[0].model}">이력 조회</a></div></div>`);
            res.json(imagelist);
            return;
        }
        // 준중형 14개 5 2~6
        if (req.body.company == '벤츠' && req.body.size == '준중형') {
            for (let i = 2; i < 7; i++) {
                imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><a href="/cinfo/${cardscr[i-1].model}">정보 조회</a>│<a href="/chistory/${cardscr[i-1].model}">이력 조회</a></div></div>`);
            }
            res.json(imagelist);
            return;
        }
        // 중형 13개 6 7~12
        if (req.body.company == '벤츠' && req.body.size == '중형') {
            for (let i = 7; i < 12; i++) {
                imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><a href="/cinfo/${cardscr[i-1].model}">정보 조회</a>│<a href="/chistory/${cardscr[i-1].model}">이력 조회</a></div></div>`);
            }
            res.json(imagelist);
            return;
        }
        // 준대형 5개 24~28
        if (req.body.company == '벤츠' && req.body.size == '준대형') {
            for (let i = 24; i < 29; i++) {
                imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><a href="/cinfo/${cardscr[i-1].model}">정보 조회</a>│<a href="/chistory/${cardscr[i-1].model}">이력 조회</a></div></div>`);
            }
            res.json(imagelist);
            return;
        }
        // 대형 14개 6 13~18
        if (req.body.company == '벤츠' && req.body.size == '대형') {
            for (let i = 13; i < 19; i++) {
                imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><a href="/cinfo/${cardscr[i-1].model}">정보 조회</a>│<a href="/chistory/${cardscr[i-1].model}">이력 조회</a></div></div>`);
            }
            res.json(imagelist);
            return;
        }
        // 스포츠카 8개 5 19~23
        if (req.body.company == '벤츠' && req.body.size == '스포츠카') {
            for (let i = 19; i < 24; i++) {
                imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><a href="/cinfo/${cardscr[i-1].model}">정보 조회</a>│<a href="/chistory/${cardscr[i-1].model}">이력 조회</a></div></div>`);
            }
            res.json(imagelist);
            return;
        }
        if (req.body.company == '벤츠') {
            for (let i = 1; i < 29; i++) {
                imagelist.push(`<div class='mercedes'><img src='image/m${i}.png' width='100%'><div class="overlay"><a href="/cinfo/${cardscr[i-1].model}">정보 조회</a>│<a href="/chistory/${cardscr[i-1].model}">이력 조회</a></div></div>`);
            }
            res.json(imagelist);
            return;
        }
    })
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // 클라이언트로부터 구분 인자를 받아오기 위해서는 semantic url을 사용하자.
    router.get('/cinfo/:model', (req, res) => {
        let carModel = req.params.model;
        console.log(carModel);
        let found = cardscr.find(function(element) {
            if (element.model === carModel) {
                return element;
            }
        });
        // 변수를 키로 설정할때는 []를 쓰자 제발 . 말고 제발
        res.render('carinfo.html', {cardetail: found});
    })

    router.post('/cinfo',(req,res)=>{
        if (req.session.user) {
            let carModel = req.body.modelsearch;
            let found = cardscr.find(function(element) {
                if (element.model === carModel) {
                    return element;
                }
            });
            if(!found) {
                res.redirect('/');
                a++;
            }
            res.render('carinfo.html', {cardetail: found});
        } else {
            console.log('로그인 안됨. 로그인 페이지로 이동');
            res.redirect('/login_form');
        }
    })

    router.get('/chistory/:model', (req, res) => {
        let carModel = req.params.model;
        console.log(carModel);
        let found1 = cardscr.find(function(element) {
            if (element.model === carModel) {
                return element;
            }
        });
        let found2 = sampleUserList.find(function(element) {
            if (element.name === found1.seller) {
                return element;
            }
        });
        // 변수를 키로 설정할때는 []를 쓰자 제발 . 말고 제발
        res.render('carhistory.html', {cardetail: found1, userdetail: found2});
    })

    return router;
}


// module.exports = router;