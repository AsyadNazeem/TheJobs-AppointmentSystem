const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Users = require('./modules/Users');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://asyadnazeem:mustang123@cluster.habrn1v.mongodb.net/Users"
);

app.post('/register', (req, res) => {
    Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
