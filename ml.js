let http = require('http');
let fun = require('./server')
let srever = http.createServer(fun)
srever.listen(5000 , '127.0.0.1' , ()=>{
    console.log('tamer run ......')
})