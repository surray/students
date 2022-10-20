const express = require('express');
const mongoose =require('mongoose');
const routeUser=require('./Router/user');
const routeMarks=require('./Router/marklist');
const morgan =require("morgan");

const app =express();
const cors =require("cors");
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



mongoose.connect('mongodb+srv://Sur_y:Eihaa5FgSNxW7HFm@cluster0.svwcz.mongodb.net/School?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("The DB is connected");})
.catch((err)=>{console.log(err)});

app.use("/api/signup",routeUser);
app.use("/api/marks",routeMarks);


app.listen(7000,()=>console.log("Listening on port 7000"));
