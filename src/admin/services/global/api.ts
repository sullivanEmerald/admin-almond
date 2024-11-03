import axios from "axios";
import uploadedImageTypeValue from "@/admin/types/cloudinaryUpload";

const cloudinaryCloudName = import.meta.env.VITE_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

const axiosInstance = axios.create({ baseURL : `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`})

export const useUploadImageToCloudinnary = async (file : any) : Promise<uploadedImageTypeValue> => {
    
    const fileData = new FormData();

    fileData.append('file', file);
    fileData.append('upload_preset', uploadPreset);

    try {
        const {data} = await axiosInstance.post('', fileData)
        return { secure_url : data.secure_url, public_id : data.public_id}
    } catch (error) {
        console.log(error)
        throw new Error("Failed to upload image to Cloudinary")
    }
}
