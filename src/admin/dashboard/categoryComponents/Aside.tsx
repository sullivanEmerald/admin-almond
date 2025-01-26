import AsideStructure from "../middleware/asideStructure"
import Navigation from "../contents/nav"

const CategoryAside = () => {
    return (
        <>
            <AsideStructure>
                <Navigation />
            </AsideStructure>
        </>
    )
}

export default CategoryAside;