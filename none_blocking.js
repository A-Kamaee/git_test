function appendToFile(counter) {
    var fs = require('fs');
    fs.appendFile('reallyReallyLargeFile.txt', 'This i' +
        's really really large file! \r\n',
        function (error) {
    if (error) {
        console.log(error);
    }
    counter --;
    if (counter > 0) {
        appendToFile(counter);
    }
    });
}

console.log("Program Started");

appendToFile(10000000);

console.log("Program Ended");