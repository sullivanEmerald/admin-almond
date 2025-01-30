import { nestedChildrenOnly } from "../types/layout"


const PageOut: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>

            <main className="mainLayOut">
                {children}
            </main>

        </>
    )
}

export default PageOut