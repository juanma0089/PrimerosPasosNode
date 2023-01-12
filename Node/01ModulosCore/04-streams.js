'use strict'

let fs = require('fs'),
    readStream = fs.createReadStream('nombres.txt'),
    writeStream = fs.createWriteStream('nombres_copia.txt');

readStream.pipe(writeStream);

readStream.on('data', function (chunk){
    console.log(
        'He leído:',
        chunk.length,
        'caracteres'
    )
});