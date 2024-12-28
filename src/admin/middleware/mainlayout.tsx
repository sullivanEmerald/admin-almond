import Welcome from "../components/welcome"
import { Outlet } from "react-router-dom";
import LandingPageOutlet from "./landingPage";

const MainLayout = () => {
    return (
        <>
            <LandingPageOutlet>
                <Outlet />
            </LandingPageOutlet>
            {/* <Welcome /> */}

        </>
    )
}

export default MainLayout;