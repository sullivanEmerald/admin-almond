import { nestedChildrenOnly } from "@/admin/types/layout";
import PageOut from "@/admin/middleware/pageLayout";
import Aside from "../mainComponents/aside";
import Header from "../mainComponents/header";
import Main from "../mainComponents/main";
import Footer from "../mainComponents/footer";

const DashboardStructure: React.FC<nestedChildrenOnly> = ({ children }) => {
    return (
        <>
            <div className="dashboardLayout">
                <Aside />
                <PageOut>
                    <Header />
                    <Main>
                        {children}
                    </Main>
                    <Footer />
                </PageOut>
            </div>
        </>
    )
}

export default DashboardStructure;
