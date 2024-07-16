import { createContext, useCallback, useEffect, useState } from 'react';
import Page404 from '../Components/Common/Page404';
import Home from '../Components/Web/Home';
import Web from '../Components/Web/Parts/Layout';
import Admin from '../Components/Admin/Parts/Layout';
import Register from '../Components/Common/Register';
import Login from '../Components/Common/Login';
import * as l from '../Constants/urls';
import Dashbord from '../Components/Admin/Dashbord';
import UsersList from '../Components/Admin/UsersList';
import UserEdit from '../Components/Admin/UserEdit';


const RouterContext = createContext([]);




const Bebras = _ => {
    return (
        <div>
            <h1>Bebras</h1>
            <a href="/#bebras/22">Bebras</a>
            <a href="/#zebras/22">Zebras</a>
            <a href="/#">Home</a>
        </div>
    );
}

const Zebras = _ => {
    return (
        <div>
            <h1>Zebras</h1>
            <a href="/#bebras/22">Bebras</a>
            <a href="/#zebras/22">Zebras</a>
            <a href="/#">Home</a>
        </div>
    );
}




const Router = _ => {


    const [route, setRoute] = useState('');
    const [params, setParams] = useState([]);

    const handleHashChange = useCallback(_ => {
        const hash = window.location.hash.split('/');
        hash[0] || (hash[0] = '#');
        setRoute(hash.shift());
        setParams(hash);
    }, [setRoute, setParams]);

    useEffect(_ => {
        const hash = window.location.hash.split('/');
        hash[0] || (hash[0] = '#');
        setRoute(hash.shift());
        setParams(hash);
        window.addEventListener('hashchange', handleHashChange);
        return _ => window.removeEventListener('hashchange', handleHashChange);
    }, [handleHashChange]);

    const routes = [
        { path: '', pc: 0, component: null },
        { path: l.SITE_HOME, pc: 0, component: <Web><Home /></Web> },
        { path: '#bebras', pc: 0, component: <Web><Bebras /></Web> },
        { path: '#zebras', pc: 0, component: <Web><Zebras /></Web> },

        { path: l.SITE_DASHBORD, pc: 1, p1: 'dashbord', component: <Admin><Dashbord /></Admin> },
        { path: l.USERS_LIST, pc: 1, p1: 'users', component: <Admin><UsersList /></Admin> },
        { path: l.USER_EDIT, pc: 2, p1: 'user-edit', component: <Admin><UserEdit /></Admin> },

        { path: l.SITE_REGISTER, pc: 0, component: <Register/> },
        { path: l.SITE_LOGIN, pc: 0, component: <Login/> },
    ];

    const findRoute = _ => {
        return routes.find(r => {
            const realPath = r.path.split('/');
            if (realPath.length === 1) {
                return realPath[0] === route && r.pc === params.length;
            }
            if (realPath.length === 2) {
                return realPath[0] === route && r.pc === params.length && r.p1 === params[0];
            }
            return false;
        });
    }

    const routeComponent = findRoute()?.component ?? <Page404/>

    return (
        <RouterContext.Provider value={{
            params
            }}>
            {routeComponent}
        </RouterContext.Provider>
    )
}


export {
    RouterContext, Router
}