import { StateCreator } from "zustand";
import {CreateProduct, ImageType} from "../types/product";

interface ProductState {
    data: CreateProduct;
    imagePreview: string | null;
    imageFile: any;
    multipleImagePreview: string[];
    multipleImageQueryFile: File[];
}

interface ProductActions {
    setData: (field: keyof CreateProduct, value: any) => void;
    setImagePreview: (preview: string | null) => void;
    setImageFile: (file: string | null) => void;
    setMultipleImagePreviews: (previews: string[] | []) => void;
    setmultipleImageQueryFile: (files : File[]) => void;
    setSubImages : (image : ImageType) => void;
    setImage : ( image : ImageType) => void;
    resetForm: () => void;

}

export type ProductSlice = ProductState & ProductActions;

const initialState: CreateProduct = {
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
    subImage: [],
};

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
    data: initialState,
    imagePreview: null,
    imageFile: null,
    multipleImagePreview: [],
    multipleImageQueryFile: [],

    setData: (field, value) => set((state) => ({
        data: { ...state.data, [field]: value }
    })),


    setImagePreview: (preview) => set({ imagePreview: preview }),

    setMultipleImagePreviews: (previews) => set({ multipleImagePreview: previews }),

    setmultipleImageQueryFile: (files) => set({ multipleImageQueryFile: files }),

    setImageFile: (file) => set({ imageFile: file }),

    setImage : (image) => set((state) => ({
        data : {
            ...state.data,
            image : image
        }
    })),

    setSubImages: (image: ImageType) => set((state) => ({
        data: {
            ...state.data,
            subImage: [...state.data.subImage, image]
        }
    })),
   
    resetForm: () => set(() => ({ 
        data: initialState, 
        imagePreview: null, 
        imageFile: null, 
        multipleImagePreview: [] 
    }))
});
