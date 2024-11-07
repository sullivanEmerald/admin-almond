import { Form } from 'react-bootstrap';
import productFormData from '../data/product';
import FormGroup from '../components/formgroup';
import CreateProductButton from '../buttons/CreateProductButton';
import useStore from '@/admin/stores/store';
import { useMultipleImageUpload } from '../services/global/queries';
import useProductSubmission from '@/admin/Hooks/useProductSubmisson.ts';

const ProductForm = () => {

    const imageFiles = useStore((state) => state.multipleImageQueryFile);
    const upload = useMultipleImageUpload(imageFiles);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // Wait for all uploads to complete
            if (imageFiles.length > 0) {
                while (upload.successCount < upload.totalCount) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            }

            // Get the final image data
            const data = useStore.getState().data.subImage;
            console.log('Uploaded image data:', data);


        } catch (error) {
            console.error('Error during submission:', error);
        } finally {
        }
    };


    return (
        <>
            <Form className='form-container' onSubmit={useProductSubmission}>
                {productFormData.map(({ controlId, label, type, name, placeholder, multiple }) => (
                    <FormGroup
                        key={controlId} 
                        controlId={controlId}
                        label={label}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        multiple={multiple}
                    />
                ))}
                <CreateProductButton label='Create Product'/>
            </Form>
        </>
    );
};

export default ProductForm;
