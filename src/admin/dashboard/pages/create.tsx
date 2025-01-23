import FormLayout from "../../middleware/formLayout";
import FormHeader from "../../components/formheader";
import ProductForm from "../../forms/create";

const CreateProduct = () => {
    return (
        <>

            <FormLayout isDashboard={true} >
                <FormHeader name="Create Product" />
                <ProductForm />
            </FormLayout>
        </>
    )
}

export default CreateProduct;