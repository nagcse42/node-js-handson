const {readFile} = require('fs');
const { result } = require('lodash');

const getText=(path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (error, data) => {
            if(error) {
               return reject(error);
            } else {
                return resolve(data);
            }
        })
    })
}

//getText('./files/second_file.txt').then((result) => console.log(result)).catch((error) => console.log(error));

const start = async () => {
    try {
        const first = await getText('./files/first_file.txt');
        const second = await getText('./files/second_file.txt');
        console.log(first, second);
    } catch (error) {
        console.log(error)
    }
}

start();