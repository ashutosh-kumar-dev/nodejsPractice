const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res)=>{
    const rawidata = fs.readFileSync("apiData.json","utf-8");
    var apidata = JSON.parse(rawidata);

    if(req.url == "/api"){

       // res.writeHead(200,{"Content-type" : "application/json"});
      //console.log(apidata); 
       res.end(rawidata);
    }
    

});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listinging....");
})