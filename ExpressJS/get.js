// GET Request with Query Params and URL Params
// const express = require("express");
// const app = express();
// const port = 5000;

// // Simple GET
// app.get("/info", (req, res) => {
//   res.send("Server is running.");
// });

// // GET with Query Params
// app.get("/user", (req, res) => {
//   const { name, age } = req.query;
//   res.send(
//     `Query Received\nName: ${name}\nAge: ${age}`
//   );
// });

// // GET with URL Params
// app.get("/product/:id", (req, res) => {
//   const productId = req.params.id;

//   res.send(
//     `Product ID Received: ${productId}`
//   );
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

//Advanced Routing in Expressjs

//Advance routing means creating cleaner,modular,and more flexible routes using route
//parameters,query params ,and expresss.Router()

// const express=require("express");
// const app=express();

// app.use(express.json());

// app.get("/user/:id",(req,res)=>{
//   const userId=req.params.id;
//   res.send(`User ID is:${userId} `);
// });

// // Start server
// app.listen(5000, () => {
//   console.log(`Server running at http://localhost:5000`);
// });


//Middleware in ExpressJS
//middleware =a function that runs between request and response
//used for:logging,authentication,validation,parsing,error,etc.

//Types of Middleware
//1.Application Level middleware
//2.custom middleware
//3.Routr-level & App-level Middleware
//4.Error-hamdling middleware

// const express=require("express");
// const app=express();

// //Simple middleware
// app.use((req,res,next)=>{
//   console.log("Middleware works!");
//   next();
// });

// app.get("/",(req,res)=>{
//   res.send("Hello From Express!")
// })

// app.listen(5000,()=>{
//   console.log("server started at http://localhost:5000");

// })



//Example of custom middleware

// const express=require("express");
// const app=express();

// function myMiddleware(req,res,next){
//   console.log("This is my custom middleware");
//   next();
// }
// app.use(myMiddleware);

// app.get("/",(req,res)=>{
//   res.send("Home Page");
// })
// app.listen(5000,()=>{
//   console.log("server started at http://localhost:5000");

// })




//EXAMPLE OF ERROR HANDLING MIDDLEWARE
const express=require("express");
const app=express();

app.get("/",(res,req,next)=>{
  const error=new Error("Something went wrong");
  //next("Something went wrong");
  next(error);
});

app.use((err,req,res,next)=>{
  console.log("Error:",err.message);
  res.send("Error occurred!")

});

app.listen(5000,()=>{
  console.log("server satrted at http://localhost:5000");
});