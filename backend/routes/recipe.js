const express = require('express');
const {getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
    upload
} = require('../controller/recipe');
const verifyToken  = require('../middleware/auth');
const router = express.Router();

router.get("/",getRecipes) //get all recipes
router.get("/:id",getRecipe) //get recipe by id
router.post("/",verifyToken,upload.single('file'),addRecipe) //create/add a new recipe
router.put("/:id",upload.single('file'),editRecipe) //update/edit a recipe by id
router.delete("/:id",deleteRecipe) //delete a recipe by id


module.exports= router;