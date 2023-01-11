"use strict";

let fs = require("fs");
console.log("\n Abriendo archivo:");

let content = fs.readFileSync("archivo.txt", "utf8");
console.log(content);

console.log("\n Haciendo otra cosa");

console.log(process.uptime());

