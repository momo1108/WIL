const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const router_api = require('./routes/router_api')();

const port = 3002;
global.sampleCarList = [];

if(fs.existsSync('./data/carlist.json')) {
    let rawdata = fs.readFileSync('./data/carlist.json');
    sampleCarList = JSON.parse(rawdata);
    console.log(sampleCarList);
}

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());
app.use('/api',router_api)

app.listen(port, ()=>{
    console.log('Server is ready to start with port number ', port);
})