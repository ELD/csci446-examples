import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");

  const user = await db.collection("users").findOne({ username: username });

  const match = await bcrypt.compare(password, user.passwordHash);

  if (match) {
    res
      .status(200)
      .cookie("session", username, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 86400 * 1000,
      })
      .end();
    return;
  }

  res.status(400).json({
    message: "invalid credentials",
    code: 400,
  });
});

router.post("/logout", (req, res) => {
  res.status(200).clearCookie("session").end();
});

router.get("/me", async (req, res) => {
  const db = req.app.get("db");

  const sessionValue = req.cookies.session;

  const user = await db.collection("users").findOne({ username: sessionValue });

  if (user) {
    res
      .status(200)
      .cookie("session", sessionValue, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 86400 * 1000,
      })
      .json({
        username: user.username,
      })
      .end();
    return;
  }

  res
    .status(400)
    .json({
      message: "invalid session",
      code: 400,
    })
    .end();
});

export default router;
