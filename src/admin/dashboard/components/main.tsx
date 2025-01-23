import DashbooardContentLayout from "@/admin/middleware/dashboardContent"
import { nestedChildrenOnly } from "@/admin/types/layout"

const Main: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <DashbooardContentLayout>
                {children}
            </DashbooardContentLayout>
        </>
    )
}

export default Main