const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set up MongoDB connection
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

// Define user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Set up route to handle registration form submission
app.post('/register', (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save(err => {
    if (err) {
      res.status(500).send('Error registering new user.');
    } else {
      res.status(200).send('Welcome to the club!');
    }
  });
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
