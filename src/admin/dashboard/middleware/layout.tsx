import nestedChildren from "@/admin/types/layout";
import Aside from "../components/aside";
import Header from "../components/header";


const DashboardStructure: React.FC<nestedChildren> = ({ children }) => {
    return (
        <>
            <div className="dashboardLayout">
                <Aside />
                <section className="mainLayOut">
                    <Header />
                    <main>
                        {children}
                    </main>
                </section>
            </div>
        </>
    )
}

export default DashboardStructure;
