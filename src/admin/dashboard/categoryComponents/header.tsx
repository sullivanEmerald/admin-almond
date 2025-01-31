import ProductHeader from "@/admin/middleware/headerLayout";
import CategoryHeaderContents from "../contents/categoryHeader";
const CategoryHeader = () => {
    return (
        <ProductHeader>
            <CategoryHeaderContents />
        </ProductHeader>
    )
}

export default CategoryHeader;