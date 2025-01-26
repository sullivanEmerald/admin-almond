import { nestedChildrenOnly } from "@/admin/types/layout"
import CategoryAside from "../categoryComponents/Aside";
import CategoryHeader from "../categoryComponents/header";

const CategoryStructure: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <div>
                <CategoryHeader />
                <CategoryAside />
                {children}
            </div>
        </>
    )
}

export default CategoryStructure;