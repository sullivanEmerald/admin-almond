import relativeRoutes from "../relativeroutes/routes"
const { route, item, order, trade, dashboard, category } = relativeRoutes


const adminApis = {
    routes: {
        index: route,
        register: 'register',
    },
    admin: {
        dashboard: dashboard,
    },

    getCategory: {
        categories: `${dashboard}${category}`
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
const { routes, admin, product, orders, trades, getCategory } = adminApis;

export { routes, admin, product, orders, trades, getCategory }