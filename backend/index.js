const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const User = require("./models/user");
const Project = require('./models/project');

const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/Database")
var db = mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))


app.post("/",  async(req, res) => {
  const {email} = req.body;
  console.log("form data", {email: email});
  try {
    const result = await User.create({email: email});
    console.log(result)
    return res.send(result);
  } catch(err) {
    console.log(err)
    return res.status(400).send(err);
  }
})

app.get('/getUser', async(req, res) => {
  try {
    const result = await User.find();
    console.log(result);
    return res.send(result)
  } catch(err) {
    return res.send(err);
  }
})

app.post('/uploadedData', async(req, res) => {
  const {name, description} = req.body;
  const data = {
    "name": name,
    "description": description
  }
  try {
    const result = await Project.create(data);
    console.log(result);
    return res.send(result);
  } catch(err) {
    return res.send(err);
  }
})

app.get('/getData', async(req, res) => {
  try {
    const result = await Project.find();
    console.log(result);
    return res.send(result)
  } catch(err) {
    return res.send(err);
  }
})

app.get('/projects', (req, res) => {
  res.status(200).send([
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A1"
    },
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A2"
    },
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A3"
    },
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A4"
    },
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A5"
    },
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A6"
    },
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A7"
    },
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A8"
    },
    {
      projectSymbol: "SP",
      projectTitle: "Sample Project",
      episodes: 4,
      weeks: 1,
      id: "A9"
    }
  ])
})

app.listen(PORT, () => {
  console.log('Listening on', PORT);
})