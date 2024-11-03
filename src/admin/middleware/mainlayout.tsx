import Welcome from "../components/welcome"
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Welcome />
            <Outlet />
        </>
    )
}

export default MainLayout;