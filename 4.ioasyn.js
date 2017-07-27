var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data)) {
    var line = data.split('\n').length-1;
    console.log(line);
}