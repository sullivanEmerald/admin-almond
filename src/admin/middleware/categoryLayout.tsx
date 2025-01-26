import { Outlet } from "react-router-dom";
import CategoryStructure from "../dashboard/middleware/categoryLayout";

const CategoryLayout = () => {

    return (
        <>
            <CategoryStructure>
                <Outlet />
            </CategoryStructure>
        </>
    )

}

export default CategoryLayout;