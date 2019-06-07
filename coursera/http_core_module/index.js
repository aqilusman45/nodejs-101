const http = require('http');

const HOSTNAME = 'localhost';

const PORT = 3000; 

const server = http.createServer((req, res)=>{
   console.log(req.headers);
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end('<html><body><h1>Hello World</h1></body></html>')
})

server.listen(PORT, HOSTNAME, ()=>{
    console.log(`Server is starting at http://${HOSTNAME}:${PORT}`);  
})