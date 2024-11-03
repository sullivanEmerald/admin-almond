import { StateCreator } from "zustand";
import { useUploadImageToCloudinnary } from "../services/global/api";
import {CreateProduct, ImageType} from "../types/product";

interface ProductState {
    data: CreateProduct;
    imagePreview: string | null;
    imageFile: any;
    multipleImagePreview: string[] | null;
    multipleImageQueryFile: File[];
}

interface ProductActions {
    setData: (field: keyof CreateProduct, value: any) => void;
    setImagePreview: (preview: string | null) => void;
    setImageFile: (file: string | null) => void;
    uploadImageToCloudinary: () => Promise<void>;
    setMultipleImagePreviews: (previews: string[] | []) => void;
    setmultipleImageQueryFile: (files : File[]) => void;
    setSubImages : (images : ImageType[] |  undefined) => void;
    resetForm: () => void;

}

export type ProductSlice = ProductState & ProductActions;

const initialState: CreateProduct = {
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
    subImage:[]
};

export const createProductSlice: StateCreator<ProductSlice> = (set, get) => ({
    data: initialState,
    imagePreview: null,
    imageFile: null,
    multipleImagePreview: [],
    multipleImageQueryFile: [],

    setData: (field, value) => set((state) => ({
        data: { ...state.data, [field]: value }
    })),

    uploadImageToCloudinary: async () => {

        const { imageFile, multipleImageQueryFile } = get();

        if (!imageFile || !multipleImageQueryFile) return;

        try {
            const { secure_url, public_id } = await useUploadImageToCloudinnary(imageFile);
            set((state) => ({
                data: { ...state.data, image: { secure_url, public_id } }
            }));

        } catch (error) {
            console.log(error);
            return;
        }

        
    },

    setImagePreview: (preview) => set({ imagePreview: preview }),

    setMultipleImagePreviews: (previews) => set({ multipleImagePreview: previews }),

    setmultipleImageQueryFile: (files) => set({ multipleImageQueryFile: files }),

    setImageFile: (file) => set({ imageFile: file }),

    setSubImages : (images) => set((state) => ({
        data : { ...state.data, subImage : [...state.data.subImage, ...(images ?? [])]}
    })),

    resetForm: () => set({ data: initialState, imagePreview: null, imageFile: null, multipleImagePreview: [] })
});
