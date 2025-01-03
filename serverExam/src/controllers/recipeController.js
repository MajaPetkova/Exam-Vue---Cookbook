const router = require('express').Router();
const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const api = require('../services/recipeService');
const errorMapper = require('../util/errorMapper')

router.get('/', async (req, res) => {
   res.json(await api.getAll())
});
router.post('/',isAuth(), async (req, res) => {
   const recipe = {
      title: req.body.title,
      ingredients: req.body.ingredients,
      prepTime: req.body.prepTime,
      cookTime: req.body.cookTime,
      img: req.body.img,
      description: req.body.description,
      difficulty: req.body.difficulty,
      _ownerId: req.user._id
   }
   try {
      const result = await api.create(recipe)
      console.log(req.body);
      res.json(result);
   } catch (err) {
      console.error(err)
      const message = errorMapper(err)
      // console.log(err.name)
      res.status(400).json({ message })
   }
})
router.get('/:id', preload(api),(req, res) => {
   // async
   // const id = req.params.id;

   // const recipe = await api.getById(id)
   // if (recipe) {
   //    res.json(recipe)
   // } else {
   //    res.status(404).json({ message: 'Event not found' })
   // }
   res.json(res.locals.recipe)
})

router.put('/:id',isOwner(), preload(api), async (req, res) => {
   // const id = req.params.id;
   // const recipe = {
   //    title: req.body.title,
   //    ingredients: req.body.ingredients,
   //    prepTime: req.body.prepTime,
   //    cookTime: req.body.cookTime,
   //    img: req.body.img,
   //    description: req.body.description,
   //    difficulty: req.body.difficulty
   // }
   try {
      const result = await api.updateById( req.locals.recipe, req.body)
      // console.log(req.body);
      res.json(result);
   } catch (err) {
      // if(err._notFound){
      //    res.status(400).json({message: 'Event not found'})
      // }else{
      console.error(err)
      res.status(400).json({ message: 'Request error' })
      // }
   }
});
router.delete('/:id',isAuth(),isOwner(), async (req, res) => {
   const id = req.params.id;
   try {
      const result = await api.deleteById(id)
      // console.log(req.body);
      res.json(result);
   } catch (err) {
      console.error(err)
      res.status(400).json({ message: 'Recipe not found' })
   }

})

module.exports = router;