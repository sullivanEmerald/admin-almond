import { Link } from "react-router-dom"
import { admin } from "../apis/panel";
const AppLogo = () => {
    return (
        <>
            <Link to={admin.dashboard} className='projectLinks'>
                Almond
            </Link>
        </>
    )
}

export default AppLogo;