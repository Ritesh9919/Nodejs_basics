// creating the server using node js

// 1. import http library/module
const http = require('http');
const fs = require('fs');

//2. create server

const server = http.createServer((req, res)=> {
    const data = fs.readFileSync('index.html').toString()
     res.end(data);
})

//3 specify a port to litien to a client request
server.listen(8000, ()=> {
    console.log('Server is running on port 8000' );
})



