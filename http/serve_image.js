const http = require('http');
const fs = require('fs');
const url = require('url');



http.createServer((req, res)=>{
    var request = url.parse(req.url, true);
    var action = request.pathname;

    var img = fs.readFileSync('./thanos.jpg')
    if (action === "/logo.gif") {
        res.writeHead(200, {'Content-Type' : 'image/gif'});
        res.end(img, 'binary');
    }
}).listen(3000, 'localhost', ()=>{
    console.log('Server Deployed');
})