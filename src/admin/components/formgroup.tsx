import { Form } from 'react-bootstrap';
import { useEffect, useState} from 'react';
import { FormData } from '../types/form';
import SelectCategory from '../category/Select';
import useStore from '../stores/store';
import { CreateProduct } from '../types/product';
import ImagePreview from './ImagePreview';
import { HandleInputChange, HandleFileChange } from '../actions/product';

const FormGroup: React.FC<FormData> = ({ controlId, label, type, name, placeholder, multiple }) => {
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const value = useStore((state) => state.data[name as keyof CreateProduct]) || '';
    const imagePreview = useStore((state) => state.imagePreview);
    const multipleImagePreviews = useStore((state) => state.multipleImagePreview || []);


    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setIsUploading(true);
            await HandleFileChange(e);
        } finally {
            setIsUploading(false);
        }
    };


    // In your FormGroup component, add:
useEffect(() => {
    // Cleanup function
    return () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }
        multipleImagePreviews.forEach(preview => {
            URL.revokeObjectURL(preview);
        });
    };
}, [imagePreview, multipleImagePreviews]);

    
    return (
        <>
            <Form.Group controlId={controlId}>
                <Form.Label>
                    {multiple ? (
                        <>
                            {label} <sup className="formAsteriks">*</sup>
                        </>
                    ) : (
                        label
                    )}
                </Form.Label>

                {type === 'select' ? (
                    <SelectCategory name={name} />
                ) : (
                    <>
                        {type === 'file' ? (
                            <>
                                <Form.Control
                                    type={type}
                                    name={name}
                                    accept="image/*"
                                    className="formInputField"
                                    onChange={handleFileChange}
                                    multiple={Boolean(multiple)}
                                    disabled={isUploading}
                                />

                                {multiple ? (
                                    <div className="mt-3 d-flex flex-wrap gap-2 justify-content-evenly">
                                        {multipleImagePreviews.map((preview, index) => (
                                            <ImagePreview key={index} imageUrl={preview} resize={true} />
                                        ))}
                                    </div>
                                ) : (
                                    imagePreview && (
                                        <div className="mt-3 d-flex flex-wrap gap-2 justify-content-evenly">
                                            <ImagePreview imageUrl={imagePreview} resize={false} />
                                        </div>
                                    )
                                )}
                            </>
                        ) : (
                            <Form.Control
                                type={type}
                                placeholder={placeholder}
                                name={name}
                                value={value as string}
                                className="formInputField"
                                onChange={HandleInputChange}
                            />
                        )}
                    </>
                )}
            </Form.Group>
        </>
    );
};

export default FormGroup;