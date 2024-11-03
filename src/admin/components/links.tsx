import { Link } from "react-router-dom"
import Navlinks from "../data/links";

const AdminLinks = () => {
    return (
        <>
            <nav>
                <ul className="admin_list">
                    {Navlinks?.map(({ label, href, icon }, index) => (
                        <li key={index} className="admin_links">
                            <Link className="admin_goto" to={href}>{icon} {label}</Link>
                        </li> 
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default AdminLinks;