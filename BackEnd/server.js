const express = require('express') //Creates a variable to Include Express with the node REQUIRE Function
const cors = require('cors') //Creates a variable to Include CORS with the node REQUIRE Function
const app = express() //Create an Express application and store as a Varaible
const mongoose = require('mongoose') //Creates a variable to Include Mongoose with the node REQUIRE Function
const bodyParser = require('body-parser') //Creates a variable to Include Body-Parser with the node REQUIRE Function
const port = 4000 //Define a Port variable

app.use(cors());//Specify the Server app to use CORS

app.use(function (req, res, next) {//Add CORS Access Control specs to header of HTTP responses
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const connectionString = "mongodb+srv://matt:matt@mwinfield.iyix2.mongodb.net/movies?retryWrites=true&w=majority"//Store the MongoDB Connection URL
mongoose.connect(connectionString, { useNewUrlParser: true });//Use mongoose to connect to our MongoDB Database

const Schema = mongoose.Schema;//Create a Mongoose Schema to store to the DB
var movieSchema = new Schema({//Map the Schema with the movie variables
    title: String,
    year: String,
    poster: String
});

var MovieModel = mongoose.model("movie", movieSchema)//Create a Data Model using the Schema Interface to store as an object

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {//Create a Node response to a HTTP Get request at the root Address of localHost, responding with a message
    res.send('Hello World')
})

app.get('/api/movies', (req, res) => {//Create another Node response to a HTTP Get request at the /api/movies Address of localHost, responding with JSON Data
    MovieModel.find((err, data) => {//Use Mongoose Find method to retrieve data from Data Model
        res.json(data);//Return Data model from DB as JSON
    })
})


app.get('/api/movies/:id', (req, res) => {//Create another Node response to a HTTP Get request at the /api/movies/:id Address of localHost
    console.log(req.params.id)//Log the ID from the Address Bar

    MovieModel.findById(req.params.id, (err, data) => {//Use the Mongoose FindbyID Method and a callback function to return any document with that ID
        res.json(data)
    });
})

app.put('/api/movies/:id', (req, res) => {//Create another Node response to a HTTP Put request at the /api/movies/:id Address of localHost
    console.log(req.params.id)//Log the ID from the Address Bar

    console.log(req.body);

    MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {//Use the Mongoose FindbyIDAndUpdate Method and a callback function to Update any document with that ID
            res.json(data)
        }
    );
})


app.post('/api/movies', (req, res) => {
    console.log("Movie Received!");
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    MovieModel.create({//Use Mongoose Create Function to create document with the post data
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    });

    res.send('Item Added');
})

app.listen(port, () => {//Create a Node HTTP Server and Specify the Port to listen with the 'port' Variable
    console.log(`Example app listening at http://localhost:${port}`)
})