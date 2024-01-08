const fs = require("fs")
const data = "Phani again here! writing into the file"
fs.writeFile("./01-async-js/easy/writeFrom.txt", data, "utf-8", function(error){
    if (error) {
        console.error('Error writing into the file:', error);
        return;
      }
    console.log("writing done!");
});
