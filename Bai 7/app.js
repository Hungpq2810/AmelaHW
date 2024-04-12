const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/amela_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
    console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    try{
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword
        })
        const result = await newUser.save();
        res.send(newUser);

    } catch (error) {
        console.log(error);
        return;
    }
})

app.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({
            username: req.body.username
        })
        if (user) {
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (isMatch) {
                const payload = {
                    username: user.username
                }
                const secretKey = 'your_secret_key'; // Replace with a strong secret key
                const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Set expiration time
                const cookieOptions = {
                    httpOnly: true, 
                }
                res.cookie('token', token, cookieOptions);;
                res.status(200).send(token);
            } else {
                res.status(401).send("Invalid password");
            }
        } else {
            res.status(401).send("Invalid username");
        }
    }
    catch (error) {
        console.log(error);
        return;
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})