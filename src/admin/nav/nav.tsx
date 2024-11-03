import AuthLinks from "../components/authlinks";
import AdminLinks from "../components/links";
import AppLogo from "../components/logo"
const AdminHeader = () => {
    return (
        <>
            <header className="admin_header">
                <AppLogo />
                <AdminLinks />
                <AuthLinks />
            </header>
        </>
    )
}

export default AdminHeader;
