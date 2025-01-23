import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye, faTrademark, faRightFromBracket, faSquare } from "@fortawesome/free-solid-svg-icons";
import { product, trades, orders } from "../apis/panel";
import { combineIcons } from "../function/conbineicons";

const Navlinks = [

    {
        label: 'Create product',
        href: product.create,
        icon: combineIcons(faSquare, faPlus)
    },

    {
        label: 'View Products',
        href: product.view,
        icon: <FontAwesomeIcon icon={faEye} />
    },

    {
        label: 'View Trades',
        href: trades.view,
        icon: <FontAwesomeIcon icon={faTrademark} />
    },

    {
        label: 'View Orders',
        href: orders.view,
        icon: <FontAwesomeIcon icon={faEye} />
    },

    {
        label: 'Create Category',
        href: orders.view,
        icon: combineIcons(faSquare, faPlus)
    },

    {
        label: 'Logout',
        href: orders.view,
        icon: <FontAwesomeIcon icon={faRightFromBracket} />
    },

]

export default Navlinks;