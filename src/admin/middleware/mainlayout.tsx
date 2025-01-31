
import { Outlet } from "react-router-dom";
import LandingPageOutlet from "./landingPage";

const MainLayout = () => {
    return (
        <>
            <LandingPageOutlet>
                <Outlet />
            </LandingPageOutlet>

        </>
    )
}

export default MainLayout;