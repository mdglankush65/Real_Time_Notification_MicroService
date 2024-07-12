const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcryptjs.genSalt(10);

        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(200).json({ message: "User created successfully." });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const match = await bcryptjs.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ message: "Incorrect Email/Password." });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('token', token, { maxAge: 3600000 });

        res.status(200).json({ message: "User Login successfully." });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

module.exports = { registerUser, loginUser }