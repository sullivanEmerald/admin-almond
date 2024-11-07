import { useState } from 'react';
import { useMultipleImageUpload, useUploadProductPicture } from '../services/global/queries';
import useStore from '../stores/store';

export const useProductSubmission = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const imageFiles = useStore((state) => state.multipleImageQueryFile);
    const imageFile =  useStore((state) =>  state.imageFile)

    const uploadSingle = useUploadProductPicture(imageFile)
    const upload = useMultipleImageUpload(imageFiles);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            if (imageFiles.length > 0) {
                while (upload.successCount < upload.totalCount) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            }

            // Get the final image data
            const data = useStore.getState().data;
            console.log('Uploaded image data:', data.subImage);
            console.log('Uploaded single image data:', data.image);

        } catch (error) {
            console.error('Error during submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleSubmit,
        uploadSingle,
        isSubmitting,
        isLoading: upload.isLoading,
        isError: upload.isError
    };
};