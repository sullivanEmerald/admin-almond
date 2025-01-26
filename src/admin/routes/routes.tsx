import { Routes, Route } from "react-router-dom";
import ADMIN_PAGES from "@/admin/adminpages/allpages";
import Dashboardlayout from "@/admin/middleware/dashboardlayout";
import '@/admin/styles/main.css'
import MainLayout from "../middleware/mainlayout";
import { routes, admin, product, getCategory } from "../apis/panel";
import CategoryLayout from "../middleware/categoryLayout";

const { DASHBOARD, CREATE, LOGIN, REGISTER, PRODUCTS } = ADMIN_PAGES;

console.log(getCategory)

const AdminRoutes = () => {

    return (
        <Routes>
            <Route path={routes.index}>
                <Route element={<MainLayout />}>
                    <Route index element={<LOGIN />} />
                    <Route path={routes.register} element={<REGISTER />} />
                </Route>

                <Route element={<Dashboardlayout />}>
                    <Route path={admin.dashboard} element={<DASHBOARD />} />
                    <Route path={product.create} element={<CREATE />} />
                    <Route path={product.view} element={<PRODUCTS />} />
                </Route>
            </Route>


            <Route path={getCategory.categories}>
                <Route element={<CategoryLayout />}>
                    <Route index element={<p>Sullivan Amadike</p>} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AdminRoutes;