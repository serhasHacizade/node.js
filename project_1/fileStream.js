const { log } = require("console");
var fs = require("fs");

//for read a file
fs.readFile("C:/Users/{file path}/file", "utf-8", function(error, data) {
    if (error) {
        throw error;
    }
    console.log(data);
});

//for write a file but that file opened twice, file be empty and write again
fs.writeFile("C:/Users/{file path}/file2", "Mehmet Fatih", function(error, data) {
    if (error) {
        throw error;
    }
    console.log("Write");
});

//for write a file but that file opened twice, file be empty and write again
fs.appendFile("C:/Users/{file path}/file2", "Sami Koşar", function(error, data) {
    if (error) {
        throw error;
    }
    console.log("Append");
});

fs.unlink("C:/Users/{file path}/file2", function(error, data) {
    if (error) {
        throw error;
    }
    console.log("Delete");
});