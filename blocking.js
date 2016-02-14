var fs = require("fs");

//fs.writeFileSync('reallyLargeFile.txt', content, 'utf8');

console.log("Program Started");

var content = '';
for(var i = 0; i < 10000000; i ++)
{
    fs.appendFileSync('reallyLargeFile.txt', 'This is really really largeFile! \r\n');
    zddxzc;
}
//console.log(content);


//var data = fs.readFileSync('reallyLargeFile.txt');

//console.log(data.toString());
console.log("Program Ended");