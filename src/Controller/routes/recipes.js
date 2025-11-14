import { Router } from "express";
import { authMiddleware } from "../../Middlewares/authMiddleware.js";
import {
  allRecipe,
  deleteRecipe,
  createRecipe,
  updateRecipe,
} from "../RecipeController.js";

export function recipesRouter(db) {
  const recipe = Router();


  // recipe.use(authMiddleware);
  recipe.post("/recettes", (req, res) => createRecipe(req, res, db));
  recipe.get("/recettes", (req, res) => allRecipe(req, res, db));
  recipe.patch("/recettes/:id", (req, res) => updateRecipe(req, res, db));
  recipe.delete("/recettes/:id", (req, res) => deleteRecipe(req, res, db));
  return recipe;
}