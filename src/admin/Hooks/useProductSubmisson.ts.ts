import { useMultipleImageUpload } from "@/admin/services/global/queries";
import useStore from "@/admin/stores/store";

const useProductSubmission = async (event: React.FormEvent) => {
    event.preventDefault(); 

    const imageFiles = useStore.getState().multipleImageQueryFile;
    const upload = useMultipleImageUpload(imageFiles);

    try {
        if (imageFiles.length > 0) {
            while (upload.successCount < upload.totalCount) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }

        const data = useStore.getState().data.subImage;
        console.log('Uploaded image data:', data);

    } catch (error) {
        console.error('Error during submission:', error);
    }

    
};

export default useProductSubmission;
