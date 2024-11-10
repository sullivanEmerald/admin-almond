import { Form } from 'react-bootstrap';
import productFormData from '../data/product';
import FormGroup from '../components/formgroup';
import CreateProductButton from '../buttons/CreateProductButton';
import { useProductSubmission } from '../Hooks/useProductSubmission.ts';

const ProductForm = () => {

    const {handleSubmit} = useProductSubmission()
    
    return (
        <>
            <Form className='form-container' onSubmit={handleSubmit}>
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
