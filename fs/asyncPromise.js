//create Write
//fs.promise.writeFile().then().catch()

//pending ,result,rejected

// const fs=require("fs");
// const path=require("path");

// const fileName="promise.txt";
// const filePath=path.join(__dirname,fileName);

//for writefile

// fs.promises.writeFile(filePath,"Hello Anisha","utf-8").then(
//     (data)=>{console.log(data);}
// ).catch(
//     (err)=>{console.log(err);}
// )

//for readfile

// fs.promises.readFile(filePath,"utf-8").then(
//     (data)=>{console.log(data);}
// ).catch(
//     (error)=>{console.log(error);}
// )


//for appendfile


// fs.promises.appendFile(filePath,"\nhello heloooooo","utf-8").then(
//     (data)=>{console.log(data);}
// ).catch(
//     (error)=>{console.log(error);}
// )


//for deletefile 

// fs.promises.unlink(filePath).then(
//     (data)=>{console.log("data deleted sucessfully");}
// ).catch(
//     (error)=>{console.log(error);}
// )


//reading file (promises)

const fs=require("fs/promises");
const path=require("path");

const path1=__dirname;

fs.readdir(path1).then(
    (data)=>{console.log(data);}
).catch(
    (error)=>{console.log(error);}
)
