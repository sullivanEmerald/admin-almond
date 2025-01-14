import { Outlet } from "react-router-dom";
import DashboardStructure from "../dashboard/middleware/layout";

const Dashboardlayout = () => {
    return (
        <>
            <DashboardStructure>
                <Outlet />
            </DashboardStructure>
        </>
    )
}

export default Dashboardlayout;