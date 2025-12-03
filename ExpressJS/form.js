// const express=require("express");
// const app=express();
// const port=5000;


// // To read JSON body (Postman raw -> JSON)
// app.use(express.json());


// //to read from data
// app.use(express.urlencoded({extended:true}));

// //POST route
// app.post("/contact",(req,res)=>{
//     const{name,email}=req.body;
//    // res.send(`Received:Name=${name},Email=${email}`);
//     res.send({
//     message: "Data received successfully!",
//     name: name,
//     email: email
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running 
//     at http://localhost:${port}`);
// });


