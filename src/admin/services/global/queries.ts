import {  useQueries, useQuery } from '@tanstack/react-query';
import { uploadImageToCloudinary } from './api';
import useStore from '@/admin/stores/store';
import { useEffect } from 'react';
import { ImageType } from '@/admin/types/product';



export const useUploadProductPicture = (imageFile : File) => {

    if(!imageFile) return;

    const productImage = useStore.getState().setImage;

    const query =  useQuery({
        queryKey : ['fileUpload' , { imageFileName: imageFile.name }],
        queryFn : () => uploadImageToCloudinary(imageFile),
        enabled : !!imageFile
    })

    if(query.isSuccess && query.data){
        productImage(query.data)
    }

    return {
        data: query.data,
        isloading : query.isLoading,
        isError : query.isError,
        isSuccess : query.isSuccess,
    }

}

export const useMultipleImageUpload = (imageFiles: File[]) => {

    const setSubImages = useStore.getState().setSubImages;

    const queries = useQueries({
        queries: imageFiles.map((file) => ({
            queryKey: ['upload', file.name],
            queryFn: () => uploadImageToCloudinary(file),
            enabled: !!file,
        }))
    });

    

    // Handle successful uploads using useEffect
    useEffect(() => {
        queries.forEach(query => {
            if (query.isSuccess && query.data) {
                const imageData: ImageType = {
                    secure_url: query.data.secure_url,
                    public_id: query.data.public_id
                };
                setSubImages(imageData);
            }
        });
    }, [queries, setSubImages]);

    return {
        queries,
        isLoading: queries.some(query => query.isLoading),
        isError: queries.some(query => query.isError),
        successCount: queries.filter(query => query.isSuccess).length,
        totalCount: queries.length
    };
};