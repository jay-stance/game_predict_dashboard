import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';

import { store } from "../redux/store";
import { setLoading } from "../redux/slices/utilsSlice";

const {
    REACT_APP_CLOUDINARY_CLOUD_NAME,
    REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    REACT_APP_CLOUDINARY_API_KEY,
} = process.env;

const cloudinaryConfig = {
    cloud_name: REACT_APP_CLOUDINARY_CLOUD_NAME, // Replace with your Cloudinary cloud name
    upload_preset: REACT_APP_CLOUDINARY_UPLOAD_PRESET, // Replace with your Cloudinary upload preset
    api_key: REACT_APP_CLOUDINARY_API_KEY,
};

// Upload a single media (image or video)
export const uploadMedia = async(media) => {
    try {
        const formData = new FormData();
        formData.append('file', media);
        formData.append('upload_preset', cloudinaryConfig.upload_preset);
        formData.append('api_key', cloudinaryConfig.api_key);

        store.dispatch(setLoading(true));

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloud_name}/auto/upload`, {
                method: 'POST',
                body: formData,
            }
        );

        store.dispatch(setLoading(false));

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error uploading media:', error);
    }
};