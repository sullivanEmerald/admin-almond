import { nestedChildrenOnly } from "../types/layout";
const DashbooardContentLayout: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <div className="headerContainer">
                {children}
            </div>
        </>
    )
}

export default DashbooardContentLayout;