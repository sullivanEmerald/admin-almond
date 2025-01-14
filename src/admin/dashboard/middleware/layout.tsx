import nestedChildren from "@/admin/types/layout";
import Navigation from "../nav/nav";
import Logo from "@/admin/components/logo";

const DashboardStructure: React.FC<nestedChildren> = ({ children }) => {
    return (
        <>
            <div>
                <aside className="dashboarodLogoAndNav">
                    <Logo />
                    <Navigation />
                </aside>
                <section>
                    <header>
                        <p>Sullivan, A phenominal software Engineer</p>
                    </header>
                    <main>
                        {children}
                    </main>
                </section>
            </div>
        </>
    )
}

export default DashboardStructure;
