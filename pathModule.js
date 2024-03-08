
const path = require('path');

// This method join two ar more path segments using the plateform-speciefic seperater and return combined path

const filePath = path.join("src","home","data.txt");
console.log(filePath);


// it work same as join but return absolute path 

const filePath2 = path.resolve("src","home","data.txt");
console.log(filePath2);

// it return extenstion of file path

console.log(path.extname(filePath));