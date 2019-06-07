const http = require('http')
const url = require('url');

//URL will parse the query parameters as object


http.createServer((req, res)=>{
       console.log(req.url);
       res.writeHead(200, {'Content-Type': 'text/html'});
       var q = url.parse(req.url, true).query;
       console.log(q);
       var txt = q.year + " " + q.month;
       res.end(txt);
}).listen(3000);