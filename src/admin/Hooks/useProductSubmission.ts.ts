import { useState, useMemo } from 'react';
import * as yup from 'yup';
import productValidateSchema from '@/admin/validations/product';
import { useMultipleImageUpload, useUploadProductPicture } from '@/admin/services/global/queries';
import useStore from '../stores/store';

export const useProductSubmission = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const singleImageData = useStore((state) => state.imageFile);
    const memorizedsingleImageData = useMemo(() => singleImageData, [singleImageData]);
    const { isSuccess, data } = useUploadProductPicture(memorizedsingleImageData);

    const multipleImageData = useStore((state) => state.multipleImageQueryFile);
    const memorizedMultipleImages = useMemo(() => multipleImageData, [multipleImageData]);
    const { queriesData, successCount, totalCount } = useMultipleImageUpload(memorizedMultipleImages);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        setValidationErrors({});

        try {
            if (isSuccess && data) {
                // Log the data being validated
                const formData = useStore.getState().data;
                console.log('Data being validated:', formData);

                try {
                    const validatedData = await productValidateSchema.validate(formData, {
                        abortEarly: false
                    });
                    
                    console.log('Validation successful:', validatedData);
                    
                    // Process validated data
                    if (queriesData && successCount === totalCount) {
                        console.log('All images uploaded successfully');
                        // Proceed with your submission logic
                    }
                    
                } catch (validationError) {
                    if (validationError instanceof yup.ValidationError) {
                        const errors: Record<string, string> = {};
                        validationError.inner.forEach((error) => {
                            if (error.path) {
                                errors[error.path] = error.message;
                            }
                        });
                        console.log('Validation errors:', errors);
                        setValidationErrors(errors);
                        return;
                    }
                    throw validationError; // Re-throw if it's not a validation error
                }
            }
        } catch (err) {
            console.error('Submission error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleSubmit,
        isSubmitting,
        validationErrors, // Return validation errors for UI feedback
    };
};