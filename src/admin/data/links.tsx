import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye, faTrademark } from "@fortawesome/free-solid-svg-icons";
import { product, trades, orders } from "../apis/panel";

const Navlinks = [

    {
        label: 'Create product',
        href: product.create,
        icon: <FontAwesomeIcon icon={faPlus} />
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



]

export default Navlinks;