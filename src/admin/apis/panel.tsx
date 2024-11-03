import relativeRoutes from "../relativeroutes/routes"
const { route, item, order, trade} = relativeRoutes


const adminApis = {
    routes: {
        index: route,
        register: 'register',
    },
    admin: {
        dashboard: 'dashboard',
    },
    product: {
        create: `${item}/create`,
        view: `${item}s`
    },
    orders: {
        view: `${order}s`
    },
    trades: {
        view: `${trade}s`
    },
}
const { routes, admin, product, orders, trades } = adminApis;

export { routes, admin, product, orders, trades }