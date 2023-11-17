import { db } from "../db.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM cms_users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO cms_users(`username`, `email`, `password`) VALUES(?)";
    const values = [req.body.username, req.body.email, hashedPassword];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User registered successfully");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM cms_users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(404).json("Wrong username or password is incorrect");

    const token = jwt.sign({ id: data[0].id }, "jwtKey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
};
