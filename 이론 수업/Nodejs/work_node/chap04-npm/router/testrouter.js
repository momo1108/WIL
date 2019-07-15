var express = require('express');
var multer = require('multer');
// const path = require('path');


module.exports = function (path) {
    var storage = multer.diskStorage({
        // 서버에 저장할 폴더
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        // 서버에 저장할 파일명
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
    // 필터함수를 만들어줄 수 있다.
    var imgFileFilter = function (req, file, callback) {
        var ext = path.extname(file.originalname);
        console.log('확장자 : ', ext)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true);
    }
    var docFileFilter = function (req, file, callback) {
        var ext = path.extname(file.originalname);
        console.log('확장자 : ', ext)
        if (ext !== '.txt' && ext !== '.doc' && ext !== '.ppt' && ext !== '.xls') {
            return callback(new Error('Only documents are aloowd'))
        }
        callback(null, true);
    }
    var upload = multer({
        storage: storage,
        fileFilter: imgFileFilter,
        limits: {
            files: 10,
            fileSize: 3 * 1024 * 1024
        }
    });
    var docUpload = multer({
        storage: storage,
        fileFilter: docFileFilter,
        limits: {
            files: 10,
            fileSize: 3 * 1024 * 1024
        }
    });

    var router = express.Router();

    router.get('/router', (req, res) => {
        console.log('/test/router');
        res.send('<h1>Router test</h1>');
    });

    router.get('/fileupload', (req, res) => {
        res.render('test/fileupload.html');
    });
    // upload.single(파일 하나만 받겠다.)('avatar')(아바타라는 필드에서)
    router.post('/fileupload', upload.single('avatar'), (req, res, next) => {
        console.log(req.file);
        console.log(req.file);
        var imgsrc = path.join('/files', req.file.filename);
        console.log('imgsrc = ', imgsrc);
        res.render('test/showimage.html', {
            imagesrc: imgsrc
        })
    })

    router.get('/fileupload_multi_form', (req, res) => {
        res.render('test/fileupload_multi.html');
    });
    // upload.single(파일 하나만 받겠다.)('avatar')(아바타라는 필드에서)
    router.post('/fileupload_multi_form', docUpload.array('photos', 5), (req, res, next) => {
        console.log(req.files);
        res.send('uploaded...');
    })

    return router;
}