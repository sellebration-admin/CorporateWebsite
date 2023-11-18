import multer from "multer";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dbxtatipx",
  api_key: "688981383917382",
  api_secret: "8kojQtlMvd2OJ-kJ4PwTntXO6yQ",
  secure: true,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

export const handleFileUpload = (req, res, next) => {
    upload.single('image')(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: 'Error uploading file' });
      } else if (err) {
        return res.status(500).json({ error: 'Server error' });
      }
  
      try {
        if (!req.file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }
        const result = await cloudinary.v2.uploader.upload(req.file.path);
  
        if (!result.secure_url) {
          return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
        }
  
        req.file.cloudinaryUrl = result.secure_url;
  
        console.log('Uploaded file:', req.file);
        
        return res.status(200).json({ imageUrl: req.file.cloudinaryUrl });
      } catch (error) {
        console.error('Error uploading image:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  };