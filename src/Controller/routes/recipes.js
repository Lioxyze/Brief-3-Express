import { Router } from "express";
import {
  allRecipe,
  deleteRecipe,
  createRecipe,
  updateRecipe,
} from "../RecipeController.js";

export function recipesRouter(db) {
  const recipe = Router();

  recipe.post("/createRecipe", (req, res) => createRecipe(req, res, db));
  recipe.get("/allRecipe", (req, res) => allRecipe(req, res, db));
  recipe.patch("/updateRecipe/:id", (req, res) => updateRecipe(req, res, db));
  recipe.delete("/deleteRecipe/:id", (req, res) => deleteRecipe(req, res, db));

  return recipe;
}