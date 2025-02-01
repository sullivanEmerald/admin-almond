import { nestedChildrenOnly } from "@/admin/types/layout"
import PageOut from "@/admin/middleware/pageLayout";
import CategoryAside from "../categoryComponents/Aside";
import CategoryHeader from "../categoryComponents/header";
import CategoryProducts from "../categoryComponents/CategoryMain";

const CategoryStructure: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <div className='categoryProductHeader'>
            <CategoryHeader />
            <section>
                <CategoryAside />
                <PageOut>
                    <CategoryProducts children={children} />
                </PageOut>
            </section>
        </div>
    )
}

export default CategoryStructure;