import DashbooardContentLayout from "@/admin/middleware/dashboardContent";
import { nestedChildrenOnly } from "@/admin/types/layout"

const CategoryProducts: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <DashbooardContentLayout>
                {children}
            </DashbooardContentLayout>
        </>
    )
}

export default CategoryProducts;