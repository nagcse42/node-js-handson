const {createReadStream} = require('fs');

//const stream = createReadStream('./files/big_file.txt');
const stream = createReadStream('./files/big_file.txt', {highWaterMark: 9000, encoding: 'utf8'} );

// Default stream chunk size 64 KB
// Last buffer remainder
// highWaterMark controls the size of the chunk

stream.on('data', (data) => {
    console.log(data);
});

stream.on('error', (error)=> {
    console.log(error);
})