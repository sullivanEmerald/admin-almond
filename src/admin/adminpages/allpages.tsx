import Dashboard from "@/admin/pages/home";
import Login from "@/admin/pages/login";
import Register from "@/admin/pages/register";
import CreateProduct from '@/admin/pages/create';
import Products from "@/admin/pages/products";


const ADMIN_PAGES = {
    LOGIN : Login,
    REGISTER : Register,
    DASHBOARD : Dashboard,
    CREATE : CreateProduct,
    PRODUCTS : Products,
}

export default ADMIN_PAGES;