import cloudinary from "cloudinary";


export async function uploadImageToCloudinary(file) {
  try {
    const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
    });
    return cloudinaryResponse.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return null;
  }
}

