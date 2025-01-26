import { Link } from "react-router-dom"
const Category = ({ image }: { image: string }) => {
    return (
        <>

            <Link to='/dashboard/category'>
                <div className="categoryContainer">
                    <img src={image} className="categoryImage" alt="category-image" />
                </div>
            </Link>

        </>
    )
}

export default Category