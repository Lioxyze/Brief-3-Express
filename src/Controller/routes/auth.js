import { Router } from "express";
import {
  authRegister,
  authLogin,
} from "../AuthController.js";

export function authRouter(db) {
  const auth = Router();

  auth.post("/local/register", (req, res) => authRegister(req, res, db));
  auth.post("/local", (req, res) => authLogin(req, res, db));
  return auth;
}