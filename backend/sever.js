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

app.post("/checkEmailExists", (req, res) => {
    const {email} = req.body;
    Users.findOne({email: email}).then((user) => {
        if (user) {
            res.json({message: "Email exists"});
        } else {
            res.json({message: "Email does not exist"});
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password, userType } = req.body;
    Users.findOne({ email: email }).then((user) => {
        if (user) {
            if (user.password === password && user.userType === userType) {
                res.json({ message: "Login Success" });
            } else {
                // Incorrect password or user type
                res.status(401).json({ message: "Incorrect Password or User Type" });
                console.log("Incorrect Password or User Type");
            }
        } else {
            // User not found
            res.status(401).json({ message: "User not found" });
            console.log("User not found");
        }
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
