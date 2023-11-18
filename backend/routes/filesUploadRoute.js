import express from "express";
import cloudinary from "cloudinary";
const router = express.Router();

cloudinary.v2.config({
  cloud_name: "dbxtatipx",
  api_key: "688981383917382",
  api_secret: "8kojQtlMvd2OJ-kJ4PwTntXO6yQ",
  secure: true,
});

router.post("/upload", async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const result = await cloudinary.uploader.upload(req.file.buffer, {
      upload_preset: "your_upload_preset", 
    });

    if (!result.secure_url) {
      return res
        .status(500)
        .json({ error: "Failed to upload image to Cloudinary" });
    }

    return res.status(200).json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error("Error uploading image:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
