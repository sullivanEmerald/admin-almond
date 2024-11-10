import { useState, useMemo, useEffect } from 'react';
import { useMultipleImageUpload, useUploadProductPicture } from '../services/global/queries';
import useStore from '../stores/store';

export const useProductSubmission = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const imageFile = useStore((state) => state.imageFile);

    const { uploadImage} = useUploadProductPicture()


    useEffect(() => {
        if (imageFile) {
            uploadImage(imageFile);
        }
    }, [imageFile, uploadImage]);

   

    
    const imageFiles = useStore((state) => state.multipleImageQueryFile);

    // Use useMemo to ensure stable hook results without conditional hook calls


    const upload = useMemo(() => {
        return imageFiles?.length ? useMultipleImageUpload(imageFiles) : null;
    }, [imageFiles]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            // Wait until all images are uploaded if applicable
            if (imageFiles.length > 0 && upload !== null) {
                while (upload.successCount < upload.totalCount) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            }

            // Get the final image data
            const data = useStore.getState().data;
            console.log('Uploaded image data:', data.subImage);
            console.log('Uploaded single image data:', data.image);
            console.log('Product data:', data);
        } catch (error) {
            console.error('Error during submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleSubmit,
        isSubmitting,
        isLoading: upload?.isLoading || false,
        isError: upload?.isError || false,
    };
};