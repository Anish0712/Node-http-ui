const http = require('http');
const fs = require('fs');

const server= http.createServer((req,resp)=>{
    let path='./views/'

    switch (req.url) {
        case '/':
            path+='home.html'
            break;
            case'/about':
            path+='about.html'
            break;

          
    
        default:
            path+='error.html'
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            resp.end(data)
        }
    })
})

server.listen(4000,()=>{
    console.log('running')
})