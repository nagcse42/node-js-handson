const {readFileSync, writeFileSync} = require('fs');

const firstFile = readFileSync('./files/first_file.txt', 'utf8');
const secondFile = readFileSync('./files/second_file.txt', 'utf8');

console.log(firstFile, secondFile);

writeFileSync('./files/results.txt', 
`Results of combinations of files: ${firstFile}, ${secondFile}`, 
{flag: 'a'}
);