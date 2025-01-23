import { nestedChildrenOnly } from "@/admin/types/layout";
import Aside from "../components/aside";
import Header from "../components/header";
import Main from "../components/main";

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
