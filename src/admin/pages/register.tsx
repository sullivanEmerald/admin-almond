import RegisterForm from '@/admin/forms/register'
import FormLayout from '@/admin/middleware/formLayout'
import FormHeader from '@/admin/components/formheader'
const Register = () => {
  return (
    <>
        <FormLayout>
            <FormHeader name='Register'/>
            <RegisterForm />
        </FormLayout>
    </>
  )
}

export default Register