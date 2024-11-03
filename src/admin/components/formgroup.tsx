import { Form } from 'react-bootstrap';
import { FormData } from '../types/form';
import SelectCategory from '../category/Select';
import useStore from '../stores/store';
import { CreateProduct } from '../types/product';
import ImagePreview from './ImagePreview';
import { HandleInputChange, HandleFileChange } from '../actions/product';
import { useEffect } from 'react';
import { useMultipleImageUpload } from '../services/global/queries';

const FormGroup: React.FC<FormData> = ({ controlId, label, type, name, placeholder, multiple }) => {
    const value = useStore((state) => state.data[name as keyof CreateProduct]) || '';
    const imagePreview = useStore((state) => state.imagePreview);
    const multipleImagePreviews = useStore((state) => state.multipleImagePreview || []);
    const multipleImageQueryFile = useStore((state) => state.multipleImageQueryFile)


    // Testing Image Upload
    const upload = useMultipleImageUpload(multipleImageQueryFile)



    useEffect(() => {
        if (upload.isLoading) {
            <p> Uploading... {upload.successCount} of {upload.totalCount}</p>
    
            const data = useStore((state) => state.data.subImage)
            console.log(data)
        }
    }, [multipleImageQueryFile]);



    // const data = useStore((state) => state.data)

    // useEffect(() => {
    //     console.log('data for upload', data)
    // },[multipleImageQueryFile])



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
                                    onChange={HandleFileChange}
                                    multiple={Boolean(multiple)}
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