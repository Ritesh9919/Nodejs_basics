const http = require('http');


const server = http.createServer((req,res)=> {
   if(req.method == 'POST') {
     let body = "";
     req.on('data', (chunk)=> {
        body += chunk.toString();
     })

     req.on('end', ()=> {
        console.log(body);
        console.log(typeof body);
        res.end('Data is recieved');
     })

    
   }
   res.end('Welcome to node js');
})



server.listen(8000, ()=> {
    console.log('Server is running on port:8000');
})