
import { Form } from 'react-bootstrap';
import RegistrationData from '@/admin/data/register'
import Redirectlink from '../subcomponents/redirectlink';
import { routes } from '../apis/panel';
import SubmitButton from '../subcomponents/submitbbutton';

const RegisterForm = () => {
    return (
        <>
            <Form className='form-container'>
                {RegistrationData.map(({ controlId, label, name, type, placeholder }) => (
                    <Form.Group style={{ position: 'relative' }} controlId={controlId} key={controlId}>
                        <Form.Label className='fieldLabel'>{label}</Form.Label>
                        <Form.Control
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            className='formInputField'
                        />
                    </Form.Group>
                ))}

                <SubmitButton label='Register'/>
                <Redirectlink to={routes.index} question="Already have an account? Sign in" />
            </Form>
        </>
    );
};

export default RegisterForm;
