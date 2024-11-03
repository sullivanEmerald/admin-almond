
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginData from '../data/logins';
import Redirectlink from '../subcomponents/redirectlink';
import { routes } from '../apis/panel';
import SubmitButton from '../subcomponents/submitbbutton';

const LoginForm = () => {
    return (
        <>
            <Form className='form-container'>
                {loginData.map(({ controlId, label, name, type, placeholder }) => (
                    <Form.Group style={{ position: 'relative' }} controlId={controlId} key={controlId}>
                        <Form.Label className='fieldLabel'>{label}</Form.Label>
                        <Form.Control
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            className='formInputField'
                        />
                        {label === 'password' && (
                            <Link className='forgot_password_link' to='/admin/resetpassword'>
                                Forgot Password
                            </Link>
                        )}
                    </Form.Group>
                ))}

                <SubmitButton label='Login' />

                <Redirectlink to={routes.register} question="Dont't have an account? sign up" />
            </Form>
        </>
    );
};

export default LoginForm;
