import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

export async function authRegister(req, res, db) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing username, email or password" });
  }

  const existing = await db.get("SELECT * FROM users WHERE email = ?", [email]);
  if (existing) return res.status(400).json({ error: "Email already registered" });

  const hashed = await hash(password, 10);
  await db.run("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [
    username,
    email,
    hashed,
  ]);

  const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET || "dev_secret_key",
    { expiresIn: "1h" }
  );

  delete user.password;
  res.status(201).json({ ...user, jwt: token });
}

export async function authLogin(req, res, db) {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Missing email or password" });

  const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const match = await compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET || "dev_secret_key",
    { expiresIn: "1h" }
  );

  delete user.password;
  res.json({ ...user, jwt: token });
}
