import { useState, } from 'react';
import {  useUploadProductPicture } from '../services/global/queries';
import useStore from '../stores/store';

export const useProductSubmission = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);  

    const singleImageData =  useStore((state) => state.imageFile);

    const { isSuccess , data} =  useUploadProductPicture(singleImageData)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);


        if(isSuccess && data){
            console.log('this is the result of computation', useStore.getState().data.image)
        }

        try {
            // Wait until all images are uploaded if applicable
            // if (imageFiles.length > 0 && upload !== null) {
            //     while (upload.successCount < upload.totalCount) {
            //         await new Promise(resolve => setTimeout(resolve, 100));
            //     }
            // }
        } catch (error) {
            console.error('Error during submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleSubmit,
        isSubmitting,
    };
};