import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token manquant" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Format de token invalide" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    req.user = decoded;

    next(); 
  } catch (error) {
    return res.status(401).json({ error: "Token invalide ou expiré" });
  }
}
