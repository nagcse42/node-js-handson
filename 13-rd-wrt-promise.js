const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async () => {
    try {
        const first = await readFilePromise('./files/first_file.txt', 'utf8');
        const second = await readFilePromise('./files/second_file.txt', 'utf8');
        console.log(first, second);
        await writeFilePromise('./files/promise_file.txt',`Merge of first and second file : ${first} ${second}`, {flag:'a'});
    } catch (error) {
        console.log(error)
    }
}

start();