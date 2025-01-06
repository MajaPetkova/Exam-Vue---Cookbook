const { model, Schema, Types: { ObjectId } } = require('mongoose');

const recipeSchema = new Schema({
    title: { type: String, minLength: [3, 'Title must be at least 3 characters long'] },
    ingredients: { type: Array },
    prepTime: { type: Number },
    cookTime: { type: Number },
    img: { type: String },
    description: { type: String },
    difficulty: { type: String },
    // _ownerId: { type: ObjectId, ref: 'User' },
})

const Recipe = model('Recipe', recipeSchema)
module.exports = Recipe;