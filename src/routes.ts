// pages
import User from "./pages/User/User";
import Resource from "./pages/Resource/Resource";
import CreateUser from "./pages/CreateUser/CreateUser";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";

// other
import {FC} from "react";
import UserForm from "./components/UserForm";
import UpdateUser from "./pages/UpdateUser/UpdateUser";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'user-route',
        title: 'User',
        path: '/',
        enabled: true,
        component: User
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/resource',
        enabled: true,
        component: Resource
    },
    {
        key: 'update-user-route',
        title: '',
        path: '/user/:id',
        enabled: false,
        component: UpdateUser
    },
    {
        key: 'create-user-route',
        title: 'Create User',
        path: '/new-user',
        enabled: true,
        component: CreateUser
    },
    {
        key: 'registration-route',
        title: 'Registration',
        path: '/registration',
        enabled: false,
        component: Registration
    },
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: false,
        component: Login
    }
]