var http = require('http');
var fileSystem = require('fs');

http.createServer(function(request, response) {
    //const fileData = fileSystem.readFileSync('./files/big_file.txt', 'utf8');
    //response.end(fileData);

    //below one is with stream chunks example
    const fileStream = fileSystem.createReadStream('./files/big_file.txt', 'utf8');

    fileStream.on('open', () => {
        fileStream.pipe(response);
    })
    fileStream.on('error', () => {
        response.end();
    })


}).listen(5000)