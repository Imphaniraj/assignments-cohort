const fs = require("fs");

fs.readFile("01-async-js/medium/file-with-spaces.txt", "utf-8", (err,data)=>{
    if (err) {
        console.error('Error reading file:', err);
        return;
      }
    const modifiedData= data.replace(/\s+/g, ' ').trim()
    fs.writeFile("01-async-js/medium/file-without-spaces.txt", modifiedData, (err)=>{
        if (err) {
            console.error('Error writing into file:', err);
            return;
          }
          console.log('writing done!')
    })
})