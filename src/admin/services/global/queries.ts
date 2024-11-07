import {  useQueries, useQuery } from '@tanstack/react-query';
import { uploadImageToCloudinary } from './api';
import useStore from '@/admin/stores/store';
import { useEffect } from 'react';
import { ImageType } from '@/admin/types/product';



export const useUploadProductPicture = (imageFile: File) => {

    const productImage = useStore.getState().setImage;

    if (!imageFile) return { data: null, isLoading: false, isError: false, isSuccess: false };

    const query = useQuery({
        queryKey: ['singlefileppload', { imageFileName: imageFile.name }],
        queryFn: () => uploadImageToCloudinary(imageFile),
        enabled: !!imageFile,  
    });

    useEffect(() => {
        if (query.isSuccess && query.data) {
            productImage(query.data);
        }
    }, [query.isSuccess, query.data, productImage]);

    return {
        data: query.data,
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
    };
};


export const useMultipleImageUpload = (imageFiles: File[]) => {

    const setSubImages = useStore.getState().setSubImages;

    const queries = useQueries({
        queries: imageFiles.map((file) => ({
            queryKey: ['upload', file.name],
            queryFn: () => uploadImageToCloudinary(file),
            enabled: !!file,
        }))
    });

    

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