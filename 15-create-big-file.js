const { writeFileSync} = require('fs');

for(let i=0; i<=100000; i++) {
    writeFileSync('./files/big_file.txt', 
    `Line : ${i} content for big file: -> ${i}`, 
    {flag: 'a'}
    );
}

