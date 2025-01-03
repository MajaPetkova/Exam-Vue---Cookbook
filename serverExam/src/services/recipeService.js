const Recipe = require('../models/Recipe')

async function getAll() {
    return Recipe.find({});
}

async function create(recipe) {
    const result = new Recipe({
        title: recipe.title,
        ingredients : recipe.ingredients,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        img: recipe.img,
        description: recipe.description,
        difficulty: recipe.difficulty,
        _ownerId: recipe._ownerId
    });
    await result.save();
    return result;
}
async function getById(id) {
    return Recipe.findById(id)
}

async function updateById( existing, recipe) {
    // const existing= await Recipe.findById(id);
    // if(existing){
    existing.title = recipe.title;
    existing.ingredients = recipe.ingredients;
    existing.prepTime = recipe.prepTime;
    existing.cookTime = recipe.cookTime;
    existing.img = recipe.img;
    existing.description = recipe.description;
    existing.difficulty = recipe.difficulty

    await existing.save();
    return existing;
    // }else{
    //    const error= new Error ('Not found');
    //    error._notFound=true;
    //    throw error;
    // }
}
async function deleteById(id) {
    return await Recipe.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
}