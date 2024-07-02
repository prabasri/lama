const express = require('express');
const router = express.Router();
const sampleProjects = require("../db");

router.get("/", (req, res) => {
  console.log("Request received for retrieving sample projects list");

  sampleProjects.find({}, (err, docs) => {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
  console.log("Retrieving sample projects list", "doc",docs);
    
    return res.status(200).send(docs);
  })
}) 

module.exports = router;