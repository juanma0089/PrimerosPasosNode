"use strict";

let fs = require("fs");
console.log("\n Abriendo archivo:");

function imprimir(error, content){
    console.log(content);
}

let content = fs.readFile("archivo.txt", "utf8", imprimir);


console.log("\n Haciendo otra cosa");

console.log(process.uptime());