

const http = require("http");

const server = http.createServer((req, res)=>{

    if(req.url == "/")
        res.end("hello! this is your server");
    else if(req.url == "/contact")
        res.end("you have visted to the contact page");
    else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>error</h1>");
    }

});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listinging....");
})