const mongoose = require("mongoose");


  const url = "mongodb+srv://manish:123@cluster0.clbmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//   this will return promise
mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err);
  });
module.exports = mongoose;
