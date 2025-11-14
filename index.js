import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/Connexions/database.js";
import { recipesRouter } from "./src/Controller/routes/recipes.js";
import { authRouter } from "./src/Controller/routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  const db = await connectToDatabase();


  app.use("/api", recipesRouter(db));
  app.use("/auth", authRouter(db));

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });
})();