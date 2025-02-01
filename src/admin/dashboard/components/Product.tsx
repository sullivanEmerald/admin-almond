import ProductLogo from "../categoryComponents/productLogo";
import ProductDetails from "./ProductDetails";
const Product = () => {
    return (
        <>
            <section className="product">
                <ProductLogo />
                <div>
                    <ProductDetails />
                </div>
            </section>
        </>
    )
}

export default Product;