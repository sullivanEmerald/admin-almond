import { nestedChildrenOnly } from "@/admin/types/layout"

const AsideStructure: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <aside className="dashboarodLogoAndNav">
                {children}
            </aside>
        </>
    )
}

export default AsideStructure;