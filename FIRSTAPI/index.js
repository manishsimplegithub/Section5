// importing express
const express = require("express");
const UserRouter = require("./routers/UserRouter");
const cors = require("cors");

// initialize express
const app = express();

// defining port
const port = 5000;

// for reading json data
app.use(express.json());

//for allowing frontend
app.use(cors({ orgin: ["http://localhost:3000"] }));

// middleware
app.use("/user", UserRouter);

// endpoint or route
app.get("/", (req, res) => {
  res.send("you got a reponse");
});

app.get("/home", (req, res) => {
  res.send("you have reached home");
});

app.get("*", (req, res) => {
  res.send("invalid request");
});

// starting the server
app.listen(port, () => {
  console.log("server started on 5000");
});
