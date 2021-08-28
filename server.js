const env = process.env.NODE_ENV || 'development';
const exphbs = require('express-handlebars');
const config = require('./config/config')[env];
const app = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
//const jwt = require('jsonwebtoken');


//require('./config/express')(app);
require('./config/routes')(app);


// mongoose.connect("mongodb+srv://tsherpa589:<password>@cluster0.4uxqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  {
//     dbName: "finalProject",
//     user: "tsherpa589",
//     pass: "Kathmandu01",
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
//   )
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tsherpa589:<Kathmandu01>@cluster0.4uxqu.mongodb.net/finalProject?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log("mongdb conntected");
});
    // .then( (res) => console.log('db connected'))
    // .catch((err) => console.log(err));


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("monoose dataBase connected")
});


app.listen(
    config.port, 
    console.log(`Listening on port ${config.port}! server is running..`)
	);
