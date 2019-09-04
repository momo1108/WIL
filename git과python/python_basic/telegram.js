const axios = require('axios');

let url = 'https://api.telegram.org/bot/sendMessage'
axios.get("https://api.telegram.org/bot/sendMessage?chat_id=&text=Hellow, It's me.")
    .then((res)=>{
        console.log(res);
    })