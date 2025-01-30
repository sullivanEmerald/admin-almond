import ProductLogo from "../categoryComponents/productLogo";
import ProductDetails from "./ProductDetails";
const Product = () => {
    return (
        <>
            <section className="product">
                <ProductLogo />
                <ProductDetails />
            </section>
        </>
    )
}

export default Product;