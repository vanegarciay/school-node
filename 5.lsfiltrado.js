var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data){
    data.forEach(function(dato) {
        if(path.extname(dato) === '.'+ process.argv[3]){
            console.log(dato);
        }
    });
});