const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users.js");
//const books = require('./routes/api/books.js');
require('dotenv').config();

const app = express();
const port = (process.env.PORT || 5000);

// Bodyparser middleware
app.use(bodyParser.urlencoded(
    {extended: false})
);
app.use(bodyParser.json());

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
// Private Routes
app.use("/api/users", users);

//app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
require("./routes/api/books.js")(app);

//app.use('/api/books', books);
require("./routes/api/forumposts.js")(app);

//to load the react app when upload to heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')));
    
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}else{
    app.get('/', (req,res)=>{
        res.send('APi running');
    });
}

app.listen(port, () => console.log(`Server running on port ${port}`));