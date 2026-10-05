const fs = require('fs');

fs.readFile("./text.txt",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})

fs.writeFile("./text1.txt","1234",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("data written")
    }
})

fs.appendFile(".text.txt","1234",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("data append")
    }
})

fs.unlink(".text1.txt","1234",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file deleted")
    }
})


fs.mkdir("./test",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created")
    }
})

fs.rmdir("./test",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file deleted")
    }
})

