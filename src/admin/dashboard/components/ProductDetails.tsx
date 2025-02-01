const ProductDetails = () => {
    return (
        <>
            <img src="/images/dashboard/samsung.png" alt="productImage" />
            <section className="productInfos">
                <p>Hp spectre</p>
                <span>12,000</span>
                <span>10,000</span>
            </section>
            <footer className="productButtons">
                <button id="productActionButton">Edit</button>
                <button id="productActionButton">Delete</button>
                <button id="productActionButton">View more</button>
            </footer>
        </>
    )
}

export default ProductDetails