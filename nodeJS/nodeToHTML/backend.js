

const http = require("http");
const fs = require("fs");
const requests = require("requests");
const { constants } = require("buffer");


const homefile = fs.readFileSync("home.html","utf-8");

console.log(homefile);
const server = http.createServer();

server.on("request",(req, res)=>{

    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?lat=23.7833&lon=85.9667&appid=88f27920fe747e6e460f51099f7d39ee")
        .on("data",(chunk)=>{
            const obj = JSON.parse(chunk);
            //const arr = [obj];
            console.log(obj.name);
            var newfile = homefile.replace("{%placeholder%}",obj.name);
            res.write(newfile);
            



         }).on("end",()=>{
            res.end();
         })

    }

});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening......");
})

