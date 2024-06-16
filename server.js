const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const server = "127.0.0.1:27017";
const db = "signupdb";
app.use(cors());

app.use(bodyParser.json());

mongoose.connect(`mongodb://${server}/${db}`)
    .then(() => {
        console.log("Database connection is successful");
    })
    .catch((error) => {
        console.error("Database connection failed: " + error);
    });
    const userSchema = new mongoose.Schema({
        username: { type: String, required: true },
        password: { type: String, required: true },
      });
      
      const User = mongoose.model('User', userSchema);
      app.get("/", (req, res) => {
        res.send("Hello World");
    });
    app.post('/signup', async (req, res) => {
        const { username, password } = req.body;
      
        const newUser = new User({ username, password });
        try {
            await newUser.save();
            res.status(201).send(newUser);
          } catch (err) {
            res.status(500).send(err);
          }
        });
      
      
    
    app.post("/signin", async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        try {
            const user = await User.findOne({ username, password });
            if (user) {
                console.log('user found:',user);
              res.status(200).send({ message: "Sign-in successful" });
            } else {
                console.log('invalid username or password');
              res.status(401).send({ message: "Invalid username or password" });
            }
          } catch (err) {
            console.log('error during sign-in:',err);
            res.status(500).send(err);
          }
        });
        app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
    