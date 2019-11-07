let expres = require('express');
let ta = expres();
let url = require("fs")
// let port = 11000
let tar;
let arr;
url.readFile('./students.json' , 'utf8' , (error , data)=>{
    if(error) {
        console.log("error")
    }else{
       tar = JSON.parse(data)
    }

    // console.log(tar)
})
let pageSize=5;
ta.get('/students' , (req , res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let page = req.query.page
    let start = (page-1)*pageSize;
    let end = start + pageSize;
    res.send({
       students : tar.slice(start,end)
    });
});

ta.get('/students/:id' , (req , res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let id1 = req.params.id;
    let arr = tar.find(x => x.id == id1);
    res.send({
       arr
    });
});
module.exports = ta;