const ProductDetails = () => {
    return (
        <>
            <img src="/images/dashboard/samsung.png" alt="productImage" />
            <p>Hp spectre</p>
            <span>12,000</span>
            <footer className="productButtons">
                <button id="productActionButton">Edit</button>
                <button id="productActionButton">Delete</button>
                <button id="productActionButton">Status</button>
            </footer>
        </>
    )
}

export default ProductDetails