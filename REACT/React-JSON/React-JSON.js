/*
fs = require('fs')
fs.readFile('D:\\HTL Dornbirn\\4cWI 2021-2022\\SWP\\Text.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
*/


const sizeOf = require('image-size')
const dimensions = sizeOf('D:\\iPhone Bilder Backup\\105APPLE\\IMG_5998.JPG');
console.log(dimensions.width, dimensions.height)