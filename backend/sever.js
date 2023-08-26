const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Users = require('./modules/Users');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3005;

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://asyadnazeem:mustang123@cluster.habrn1v.mongodb.net/Users"
);

// Add a POST endpoint to handle adding a user profile
app.post('/addProfile', (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        state,
        city,
        designation,
        experience,
        qualification,
        specialization,
        about,
        profilePicture, // This should be handled differently (file upload)
        resume // This should be handled differently (file upload)
    } = req.body;


    // Create a new Users document using the Users schema
    const newUser = new Users({
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        state,
        city,
        designation,
        experience,
        qualification,
        specialization,
        about,
        profilePicture,
        resume
    });

    // Save the new user to the database
    newUser.save()
        .then(() => {
            res.json({ message: 'Profile added successfully' });
        })
        .catch(error => {
            res.status(500).json({ error: 'Error adding profile' });
        });
});

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
    const {email, password, userType} = req.body;
    Users.findOne({email: email}).then((user) => {
        if (user) {
            if (user.password === password && user.userType === userType) {
                res.json({message: "Login Success"});
            } else if (user.password === password && user.userType === userType) {
                res.json({message: "Login Success"});
            }else {
                // Incorrect password or user type
                res.status(401).json({message: "Incorrect Password or User Type"});
                console.log("Incorrect Password or User Type");
            }
        } else {
            // User not found
            res.status(401).json({message: "User not found"});
            console.log("User not found");
        }
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
