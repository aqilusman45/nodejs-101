const http = require('http');
const fs = require('fs');

const hostname = '127.0.1.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/demo.js') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/javascript');
    let jsData = fs.readFileSync('./demo.js')
    res.write(jsData);
    res.end();
  }
  
  if (req.url === '/') {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let htmlData = fs.readFileSync('./index.html');
  res.write(htmlData);
  res.end();
  }
  
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

