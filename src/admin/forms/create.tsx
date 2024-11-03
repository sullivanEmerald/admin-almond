import { Form } from 'react-bootstrap';
import productFormData from '../data/product';
import FormGroup from '../components/formgroup';
import CreateProductButton from '../buttons/CreateProductButton';
const ProductForm = () => {


    return (
        <>
            <Form className='form-container'>
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
