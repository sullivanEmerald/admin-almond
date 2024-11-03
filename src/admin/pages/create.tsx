import FormLayout from "../middleware/formLayout";
import FormHeader from "../components/formheader";
import ProductForm from "../forms/create";

const CreateProduct = () => {
    return (
        <>
            <section>
                <FormLayout >
                    <FormHeader name="Create Product" />
                    <ProductForm />
                </FormLayout>
            </section>
        </>
    )
}

export default CreateProduct;