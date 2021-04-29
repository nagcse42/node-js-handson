const path = require('path');

console.log(path.sep);

const filePath = path.join('/files', 'test.txt');
console.log('File path : '+filePath);

console.log('Base path: '+path.basename(filePath));

const absolutePath = path.resolve(__dirname, '/files', 'test.txt');
console.log('Absolute path: '+absolutePath);

