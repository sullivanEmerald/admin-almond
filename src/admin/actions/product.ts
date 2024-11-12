import {CreateProduct } from "../types/product";
import useStore from "../stores/store";


const setData = useStore.getState().setData;


export const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setData(name as keyof CreateProduct, value);
};

export const HandleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file) return;

    if (!e.target.multiple) {
        const previewUrl = URL.createObjectURL(file[0]);
        
        useStore.setState({
            imageFile: file[0],
            imagePreview: previewUrl
        });
    } else {
        const fileArray = Array.from(file);
        const previews = fileArray.map(file => URL.createObjectURL(file));
        
        useStore.setState({
            multipleImagePreview: previews,
            multipleImageQueryFile: fileArray
        });
    }
};