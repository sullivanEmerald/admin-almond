
const Category = ({ image }: { image: string }) => {
    return (
        <>

            <div className="categoryContainer">
                <img src={image} className="categoryImage" alt="category-image" />
            </div>

        </>
    )
}

export default Category