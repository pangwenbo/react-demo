import { Login } from '../pages/Login';
import List from '../pages/admin/products/List';
import Edit from '../pages/admin/products/Edit';
import PageNotFound from '../pages/PageNotFound';
import Index from '../pages/admin/dashboard/Index';
export const mainRoutes = [
        {
                path: '/login',
                component: Login,
        },
        {
                path: '/404',
                component: PageNotFound,
        },
];
export const adminRoutes = [
        {
                path: '/admin/dashboard',
                component: Index,
                isShow: true,
                title: '看板',
                icon: 'UserOutlined',
        },
        {
                path: '/admin/products',
                component: List,
                isShow: true, //菜单是否显示
                exact: true,
                title: '商品管理',
                icon: 'LaptopOutlined',
        },
        {
                path: '/admin/products/edit/:id?', //?可选参数
                component: Edit,
                isShow: false,
        },
];
