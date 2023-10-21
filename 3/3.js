const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
if (err) {
    console.error('Error writing to file: ', err);
} else {
    console.log('File "welcome.txt" created');
}

fs.readFile('welcome.txt', function (err, data) {
    if (err) {
    return console.error(err);
    }
    console.log("reading welcome.txt : " + data.toString());
});
});
