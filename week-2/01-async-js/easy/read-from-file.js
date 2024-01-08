const fs = require("fs")
expensiveOperation();
fs.readFile("./01-async-js/easy/readFrom.txt", "utf-8", function(error, data){
    if (error) {
        console.error('Error reading file:', error);
        return;
      }
    console.log(data);
    expensiveOperation();
});

function expensiveOperation(){
    for(let i=0; i<1e7; i++){
        continue;
    }
    console.log('phani')
}