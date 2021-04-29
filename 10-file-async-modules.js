const {readFile, writeFile} = require('fs');

readFile('./files/first_file.txt', 'utf8',(error, response) => {
    if(error) {
        console.log(error);
        return;
    }
    const firstFile = response;
    console.log(response);

    readFile('./files/second_file.txt', 'utf8',(error, response) => {
        if(error) {
            console.log(error);
            return;
        }
        const secondFile = response;
        writeFile('./files/async_results.txt', 
        `Results of combinations of files: ${firstFile}, ${secondFile}`, 
        {flag: 'a'},
        (error, response) => {
            if(error) {
                console.log(error);
                return;
            }
    
            console.log(response);
        }
        );
        console.log(response);
    });
});
