import Login from "@/admin/pages/login";
import Register from "@/admin/pages/register";
import Dashboard from "@/admin/dashboard/pages/home";
import CreateProduct from '@/admin/dashboard/pages/create';
import Products from "@/admin/dashboard/pages/products";


const ADMIN_PAGES = {
    LOGIN: Login,
    REGISTER: Register,
    DASHBOARD: Dashboard,
    CREATE: CreateProduct,
    PRODUCTS: Products,
}

export default ADMIN_PAGES;