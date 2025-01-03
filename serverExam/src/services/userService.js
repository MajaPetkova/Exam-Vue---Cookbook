const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User');

const blacklist = new Set();
const secret = 'shgfiudghkdgfdkgkdfdgj'

async function register(username, email, password) {
    const existing = await User.findOne({ email: new RegExp(`^${email}$`, 'i') })

    if (existing) {
        throw new Error('Email is taken')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        email,
        hashedPassword
    });

    await user.save();
    return createSession(user);
};

async function login(email, password) {
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') })

    if (!user) {
        throw new Error('Incorrect email or password');
    }
    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Incorrect email or password')

    }
    return createSession(user);
};


function logout(token) {
    blacklist.add(token)
}
function createSession(user) {
    const payload = {
        username: user.username,
        email: user.email,
        _id: user._id
    }

    const accessToken = jwt.sign(payload, secret);

    return {
        username:user.username,
        email: user.email,
        accessToken,
        _id: user._id
    }
}

function validateToken(token) {
    if(blacklist.has(token)){
        throw new Error('Token is blacklisted')
    }
    return jwt.verify(token, secret)
}
module.exports = {
    register,
    login,
    logout,
    validateToken
}