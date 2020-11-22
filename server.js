const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users=require('./routes/api/users');
const userprofile=require('./routes/api/userprofile');

const app=express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connecting to database
mongoose
  .connect(db,{
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('mongo is successfully Connected'))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());
//passsport config
require('./config/passport')(passport);

//testing the server
//app.get('/',(req,res)=>res.send('working'));
//cross origin access
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//using routes for users and userprofile
app.use('/api/users',users);
app.use('/api/userprofile',userprofile);



  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });

//to connect to localhost
const port=process.env.PORT || 5000;

app.listen(port,()=> console.log('server running on ${port}'));

//npm install -g node