const fs = require("fs");
const createStream = fs.createWriteStream("aula03.txt");
createStream.write("Hello World");
createStream.end();