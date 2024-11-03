import { useQueries } from '@tanstack/react-query';
import useStore from '@/admin/stores/store';
import { useUploadImageToCloudinnary } from './api';
import uploadedImageTypeValue from '../../types/cloudinaryUpload';

export const useMultipleImageUpload = (imageFiles : File[]) => {

    const setSubImages = useStore(state => state.setSubImages);

    const results = useQueries({
        queries: imageFiles.map((file) => ({
            queryKey: ['images', { file }],
            queryFn: () => useUploadImageToCloudinnary(file),
            enabled: !!file, 
        })),
    });

    const validSubImages = results
        .filter((result) => result.isSuccess && result.data !== undefined)
        .map((result) => {
            const { secure_url, public_id } = result.data as uploadedImageTypeValue;
            return { secure_url, public_id };
        });

    

    return { results, validSubImages };
};
