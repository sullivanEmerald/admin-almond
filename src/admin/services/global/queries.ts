import {  useQueries, useMutation } from '@tanstack/react-query';
import { uploadImageToCloudinary } from './api';
import useStore from '@/admin/stores/store';
import { useEffect, useMemo, useCallback } from 'react';
import { ImageType } from '@/admin/types/product';



export const useUploadProductPicture = () => {

    const setImage = useStore((state) => state.setImage);

    const mutation = useMutation({
        mutationFn: (file: File) => uploadImageToCloudinary(file),
        onSuccess: (data) => {
            setImage(data);
        }
    });


    const uploadImage = useCallback((file: File) => {
        if (file) {
            mutation.mutate(file);
        }
    }, [mutation]);


    

    return {
        uploadImage,
        data: mutation.data,
        isLoading: mutation.isPending,
        isError: mutation.isError,
        isSuccess: mutation.isSuccess,
        error: mutation.error
    };
};


export const useMultipleImageUpload = (imageFiles: File[] ) => {


    const setSubImages = useStore.getState().setSubImages;

    const stableFiles = useMemo(() => imageFiles.filter(file => !!file), [imageFiles]);

    const queries = useQueries({
        queries: stableFiles.map((file) => ({
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
                console.log('Uploaded image data:', imageData);
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