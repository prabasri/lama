const express = require('express');
const router = express.Router();

router.route('/proj').get((req, res) => {
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

module.exports = router;