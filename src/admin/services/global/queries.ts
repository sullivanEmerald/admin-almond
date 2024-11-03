import { useQueries } from '@tanstack/react-query';
import { uploadImageToCloudinary } from './api';
import useStore from '@/admin/stores/store';
import { useEffect } from 'react';
import { ImageType } from '@/admin/types/product';

export const useMultipleImageUpload = (imageFiles: File[]) => {
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
                useStore.getState().setSubImages(imageData);
            }
        });
    }, [queries]);

    return {
        queries,
        isLoading: queries.some(query => query.isLoading),
        isError: queries.some(query => query.isError),
        successCount: queries.filter(query => query.isSuccess).length,
        totalCount: queries.length
    };
};