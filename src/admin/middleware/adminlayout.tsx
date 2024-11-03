import { Outlet } from "react-router-dom";
import AdminHeader from "../nav/nav";
const Adminlayout = () => {
    return (
        <> 
            <AdminHeader />
            <Outlet />
        </>
    )
}

export default Adminlayout;