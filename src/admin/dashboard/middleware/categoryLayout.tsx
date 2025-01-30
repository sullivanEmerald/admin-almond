import { nestedChildrenOnly } from "@/admin/types/layout"
import PageOut from "@/admin/middleware/pageLayout";
import CategoryAside from "../categoryComponents/Aside";
import CategoryHeader from "../categoryComponents/header";
import CategoryProducts from "../categoryComponents/CategoryMain";

const CategoryStructure: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <div>
                <CategoryHeader />
                <CategoryAside />
                <PageOut>
                    <CategoryProducts children={children} />
                </PageOut>
            </div>
        </>
    )
}

export default CategoryStructure;