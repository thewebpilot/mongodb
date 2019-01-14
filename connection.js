const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/testaroo');
mongoose.connection.once('open',function(){
  console.log("Connection has been made");
}).on('error',function(){
  console.log("Connection error:",error);``
});
