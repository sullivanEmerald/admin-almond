import { nestedChildrenOnly } from "../types/layout"

const ProductHeader: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <div className="productHeader">
                {children}
            </div>

        </>
    )
}
export default ProductHeader;