//1. import readLine

const readLine = require('readline');

// 2. Configure interface to connect with terminal/command line

const interface = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

// 3 reading value

interface.question('Enter first number: ', (num1)=> {
    interface.question('Enter second number: ', (num2)=> {
        const sum = Number(num1) + Number(num2);
        console.log(sum);
    })
})




