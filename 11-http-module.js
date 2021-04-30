const http = require('http');

const server = http.createServer((request, response) => {
    //console.log(request);
    if(request.url === '/') {
        response.end('Welcome to node js server home page...'); 
    } else if(request.url === '/about') {
        response.end('About node js server');
    } else {
        response.end(`
        <h1 style="color:red">404</h1>
        <h2 style="color:red">Resouce not found..</h2>
        <a style="color:blue" href="/">Goto Home</a>
        `);
    }
    response.end();
});

server.listen(5000);