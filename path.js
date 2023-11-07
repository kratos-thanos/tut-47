const path = require('path')

console.log(path.sep);

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);

// // // const base = path.basename(filePath)
// // // console.log(base);

// // //  const abolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// // //  console.log(abolute);
console.log(path.delimiter);

const var1 = path.extname(__dirname, 'content', 'subfolder', 'test.txt')
console.log(var1);