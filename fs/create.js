// writeFileSync(filePath,Data,optional)
// readfileSync(filePath,optional)
// appendFileSync(filePath,data,optional)
// unlinkFileSync(filePath,optional)

const fs=require("fs");
const path=require("path");

const fileName="crud.txt";
const filePath=path.join(__dirname,fileName);
console.log(filePath);

// const writeFile=fs.writeFileSync(fileName,"this a create operation","utf-8");
// console.log(writeFile);


//const readFile=fs.readFileSync(filePath);
//console.log(readFile.toString());

// const updateFile=fs.appendFileSync(filePath,"don ho vai don","utf-8");
// console.log(updateFile);

 const deleteFile=fs.unlinkSync(filePath);
 console.log(deleteFile);

const readFile=fs.readFileSync(filePath,"utf-8");
console.log(readFile);







