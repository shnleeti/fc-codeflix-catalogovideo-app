import {RouteProps} from "react-router-dom"
import CategoryList from "../pages/category/PageList";
import Dashboard from "../pages/Dashboard";

export interface AppRouteProps extends RouteProps {
    name: string;
    label: string;
}

const routes : AppRouteProps[] = [
    {
        name: 'dashboard',
        label: 'Dashboard',
        path: '/',
        element: <Dashboard/>,
    },
    {
        name: 'categories.list',
        label: 'Listar categorias',
        path: '/categories',
        element: <CategoryList/>,
    },
    {
        name: 'categories.create',
        label: 'Criar categorias',
        path: '/categories/create',
        element: <CategoryList/>,
    },
    {
        name: 'categories.edit',
        label: 'Editar categorias',
        path: '/categories/:id/edit',
        element: <CategoryList/>,
    },
];

export default routes;