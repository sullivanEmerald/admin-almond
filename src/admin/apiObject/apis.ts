const api = import.meta.env.VITE_API_URL;

const routes = {
    login: `${api}/login`,
    register: `${api}/register`,
    product: `${api}/admin/product`
};
export default routes;