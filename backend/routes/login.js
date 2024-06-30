const express = require('express');
const router = express.Router();
const User = require('../models/user');

const loginRouter = router.post('/login', async(req, res) => {
  console.log(req.body.email)
  try {
    const user = new User({email: req.body.email});
    await user.save();
    return res.status(201).json(user);
  } catch(err) {
    return res.status(400).json({message: err.message})
  }
})

module.exports = loginRouter;