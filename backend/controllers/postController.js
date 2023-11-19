import { db } from "../db.js";


export const getPosts = (req, res) => {
  const cat = req.query.cat;

  let q = "SELECT * FROM posts";

  if (cat) {
    q = `SELECT * FROM posts WHERE cat = ?`;
  }

  db.query(q, [cat], (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT `title`, `desc`, `img`, `date`, `cat`, `subcat` FROM posts WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const q =
    "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `subcat`, `date`,`user_id`) VALUES (?)";
  const timestamp = req.body.date;
  const date = new Date(parseInt(timestamp));
  const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");
  const values = [
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.cat,
    req.body.subcat,
    formattedDate,
    req.body.user_id,
  ];

  db.query(q, [values], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json(err);
    }
    const postId = result.insertId;
    return res.json(postId);
  });
};

export const deletePost = (req, res) => {
  const postId = req.params.id;
  const q = "DELETE FROM posts WHERE `id` = ?";

  db.query(q, [postId], (err, data) => {
    return res.json("Post has been deleted!");
  });
};

export const updatePost = (req, res) => {
  const postId = req.params.id;
  const fieldsToUpdate = {};
  const values = [];

  // Check and add the fields to update based on the data sent from the frontend
  if (req.body.title) {
    fieldsToUpdate.title = req.body.title;
    values.push(req.body.title);
  }
  if (req.body.desc) {
    fieldsToUpdate.desc = req.body.desc;
    values.push(req.body.desc);
  }
  if (req.body.img) {
    fieldsToUpdate.img = req.body.img;
    values.push(req.body.img);
  }
  if (req.body.cat) {
    fieldsToUpdate.cat = req.body.cat;
    values.push(req.body.cat);
  }

  const fields = Object.keys(fieldsToUpdate)
    .map((field) => `\`${field}\`=?`)
    .join(",");

  const q = `UPDATE posts SET ${fields} WHERE \`id\` = ?`;

  db.query(q, [...values, postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been updated.");
  });
};
