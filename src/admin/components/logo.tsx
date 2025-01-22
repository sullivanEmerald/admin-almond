import { Link } from "react-router-dom";
import { admin } from "../apis/panel";

const Logo = () => {
    return (
        <>
            <Link to={admin.dashboard} className='logo-container'>
                <img src="/images/dashboard/logo.png" alt="logo" className="logo-image" />
            </Link>
        </>
    );
};

export default Logo;