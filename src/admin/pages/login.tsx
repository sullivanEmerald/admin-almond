import LoginForm from "../forms/login";
import FormLayout from "../middleware/formLayout";
import FormHeader from "../components/formheader";

const Login = () => {
  return (
    <>
      <FormLayout>
          <FormHeader name='Login'/>
          <LoginForm />
      </FormLayout>
    </>
  )
}

export default Login;