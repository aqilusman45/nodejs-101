const http = require('http');
const fs = require('fs');

// const hostname = '127.0.1.1';
const port = 3000;

// Blocking I/O on purpose

const server = http.createServer((req, res) => {
    for (let index = 0; index < 5000; index++) {
        console.log(index);
        
    }
  res.write('Hello World');
  res.end();
});
 
server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

