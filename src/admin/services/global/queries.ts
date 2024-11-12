import {  useQueries, useQuery } from '@tanstack/react-query';
import { uploadImageToCloudinary } from './api';
import useStore from '@/admin/stores/store';
import { useEffect, } from 'react';
import { ImageType } from '@/admin/types/product';

export const useUploadProductPicture = (file  : File) => {
  const uploadQuery = useQuery({
    queryKey: ['uploadedImage', file],
    queryFn: () => uploadImageToCloudinary(file),
    retry: 2,
    enabled: !!file,
  });

  useEffect(() => {
        if(uploadQuery.isSuccess && uploadQuery.data){
            const imageData: ImageType = {
                secure_url: uploadQuery.data.secure_url,
                public_id: uploadQuery.data.public_id
            };
            useStore.setState((state) => ({
                data : {
                    ...state.data,
                    image : imageData
                }, 
            }))
        }
  }, [uploadQuery.isSuccess, uploadQuery.data])

  return {
    data : uploadQuery,
    isLoading : uploadQuery.isLoading,
    isError : uploadQuery.isError,
    isSuccess: uploadQuery.isSuccess,
    error : uploadQuery.error
  };
};


export const useMultipleImageUpload = (imageFiles: File[] ) => {

    const queries = useQueries({
        queries: imageFiles ? imageFiles.map((file) => ({
            queryKey: ['upload', file.name],
            queryFn: () => uploadImageToCloudinary(file),
            enabled: !!file,
        })) : []
    });

    

    useEffect(() => {
        queries.forEach(query => {
            if (query.isSuccess && query.data) {
                const imageData: ImageType = {
                    secure_url: query.data.secure_url,
                    public_id: query.data.public_id
                };
                useStore.setState((state) =>({
                    data : {
                        ...state.data,
                        subImage : state.data.subImage.length > 0 ? [...state.data.subImage, imageData] : [imageData]
                    }
                }))
            }
        });
    }, [queries]);

    return {
        queriesData : queries,
        isLoading: queries.some(query => query.isLoading),
        isError: queries.some(query => query.isError),
        successCount: queries.filter(query => query.isSuccess).length,
        totalCount: queries.length
    };
};