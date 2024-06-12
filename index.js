const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoose = require("mongoose");




    mongoose
    .connect("mongodb://127.0.0.1:27017/cpms")
  .then((sucess) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port=" + 3000);
  }
});

const taskRoutes=require("./routes/taskRoutes");
app.use("/tasks",taskRoutes);

const projectRoutes=require("./routes/projectRoutes");
app.use("/projects",projectRoutes);

const userRoutes=require("./routes/userRoutes");
app.use("/users",userRoutes);

