const fs = require('fs');


function getData(callback){
    fs.readFile('data.txt', callback);
    return "this is dummy";
}



let data = getData(function(err, d){
    d += "monir";
    console.log(d);
});

console.log(data);
