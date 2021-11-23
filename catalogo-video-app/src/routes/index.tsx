import {RouteProps} from "react-router-dom"
import CategoryList from "../pages/category/PageList";
import CastMemberList from "../pages/cast-member/PageList";
import GenreList from "../pages/genre/PageList";
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
        name: 'cast_members.list',
        label: 'Listar membros de elencos',
        path: '/cast_members',
        element: <CastMemberList/>,
    },
    {
        name: 'genres.list',
        label: 'Listar gêneros',
        path: '/genres',
        element: <GenreList/>,
    },
];

export default routes;