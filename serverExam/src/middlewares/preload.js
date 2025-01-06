const api = require('../services/recipeService')

module.exports = (api) => async (req, res, next) => {
    const id = req.params.id;
    const recipe = await api.getById(id);

    if (recipe) {
        res.locals.recipe = recipe;
        next();
    } else {
        res.status(404).json({ message: 'Event not found' })
    }
}