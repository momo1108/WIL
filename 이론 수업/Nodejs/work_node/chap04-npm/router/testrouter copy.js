var express = require('express');
var multer = require('multer');
var storage = multer.diskStorage({
    // 서버에 저장할 폴더
    destination: function (req,file,cb) {
        cb(null, 'uploads/');
    },
    // 서버에 저장할 파일명
    filename: function (req, file, cb) {
        file.uploadfilename = file.originalname.substring(0, file.originalname.lastIndexOf('.'));
        cb(null, new Date().valueOf() + '_' + file.originalname);
    }
})
var upload = multer({
    storage: storage,
    limits: {
        files: 10,
        fileSize: 3*1024*1024
    }
});

module.exports = function () {
    var router = express.Router();

    router.get('/router', (req, res) => {
        console.log('/test/router');
        res.send('<h1>Router test</h1>');
    });

    router.get('/fileupload', (req,res)=>{
        res.render('test/fileupload.html');
    });
    // upload.single(파일 하나만 받겠다.)('avatar')(아바타라는 필드에서)
    router.post('/fileupload', upload.single('avatar'), (req,res,next)=>{
        console.log(req.file);
        res.send('uploaded...' + req.file.filename);
    })
    
    router.get('/fileupload_multi_form', (req,res)=>{
        res.render('test/fileupload_multi.html');
    });
    // upload.single(파일 하나만 받겠다.)('avatar')(아바타라는 필드에서)
    router.post('/fileupload_multi_form', upload.array('photos', 5), (req,res,next)=>{
        console.log(req.files);
        res.send('uploaded...');
    })

    return router;
}