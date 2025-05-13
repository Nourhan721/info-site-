const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req,res)=>{
    console.log(req.url , req.method)
    let path = "./views/"

    switch(req.url){
        case '/':
        path += 'index.html';
        break;
        case '/about':
        path += 'about.html';
        break;
        case '/contact':
        path += 'contact.html';
        break;
        default:
        path += 'error.html'
        break;

    }


    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            res.end(data)
        }
    })

})

server.listen(port,'localhost',()=>{
    console.log("hello it's working ")
})
