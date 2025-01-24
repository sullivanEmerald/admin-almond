import { nestedChildrenOnly } from "@/admin/types/layout";
import Aside from "../mainComponents/aside";
import Header from "../mainComponents/header";
import Main from "../mainComponents/main";

const DashboardStructure: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <div className="dashboardLayout">
                <Aside />
                <section className="mainLayOut">
                    <Header />
                    <Main>
                        {children}
                    </Main>
                </section>
            </div>
        </>
    )
}

export default DashboardStructure;
