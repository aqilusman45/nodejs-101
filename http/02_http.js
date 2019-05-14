const http = require('http');

const url = 'http://jsonplaceholder.typicode.com/posts/1';


http.get(url, (res)=>{
   res.setEncoding("utf8");
   let body = '';
   res.on("data", data =>{
       body += data;
   });
   res.on("end", ()=>{
       body= JSON.parse(body);
       console.log(body);
   })
})