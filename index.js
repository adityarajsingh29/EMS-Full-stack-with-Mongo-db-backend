const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggerMiddleware");

// Middleware

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes

app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});

mongoose.connect("mongodb+srv://adityarajsingh2907_db_user:aditya@employees.20qbylo.mongodb.net/ems")
.then(() =>{
  console.log("Connected to MongoDB")
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
})
app.listen(5000, () => {

  console.log("Server Running on Port 5000");

});