//Async/Await Middleware

//Async/Await middleware is used to wait for a task to finish before moving to the next step.
//Examples of Async/Await middleware

const express=require("express");
const app=express();

app.use(async (req,res,next)=>{
    console.log("Middleware Started");

    await console.log("waiting task done");
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello Guys");
});

app.listen(5000,()=>{
    console.log("Server started");
});