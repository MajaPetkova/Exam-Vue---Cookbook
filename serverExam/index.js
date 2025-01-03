const mongoose = require('mongoose')
const express = require('express');
const cors = require('./src/middlewares/cors');
const recipeController = require('./src/controllers/recipeController')
const userController= require('./src/controllers/userController');
const auth = require('./src/middlewares/auth');

async function start() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/cookbook');
        console.log('DB ready')
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1)
    }

    const app = express();
    app.use(express.urlencoded({extended: true}))
    app.use(express.json());
    app.use(cors());
    app.use(auth())

    app.use('/data/recipes', recipeController )
    app.use('/users', userController)

    app.listen(3030, () => console.log('REST service started on port 3030'))
}


start()