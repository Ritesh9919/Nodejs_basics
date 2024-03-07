
const fs = require('fs');

//To read content using blocking code
console.log('Starting to read');

const buffer = fs.readFileSync('data.txt',{encoding:'utf-8'});
console.log(buffer);


//2 Create and write file

fs.writeFileSync('employee.txt', 'Name:Ritesh, Age:22, id:245');

//3. Append another employee data
fs.appendFileSync('employee.txt','Name:Mohan, Age:23, id:675');

//4. Deleting file
try {
    fs.unlinkSync('employee.txt');
} catch (error) {
    console.log('File does not exist');
}
   



console.log('This is another operation being performed');