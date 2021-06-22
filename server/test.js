const axios = require('axios');


let data = { pinNum: 17, color: "red", state: "off" }
async function f() {
    let res = await axios.post('http://localhost:5000/', data)
    console.log(res.data)
}

f()