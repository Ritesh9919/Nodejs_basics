
const fs = require('fs');

// read data
 fs.readFile('data.txt', (err,data)=> {
    if(err) {
        console.log(err);
    }else{
        console.log(data.toString());
    }

 })

 // Write data

 fs.writeFile('employee.txt', 'new employee', (err)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('File written');
    }
 })

// Append file

  fs.appendFile('employee.txt','\n another employee', (err)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('File appended');
    }
  })

// delete file
 fs.unlink('employee.txt', (err)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('file deleted');
    }
 })


console.log('This is another operation');


