import { createContext, useCallback, useEffect, useState } from 'react';
import Page404 from '../Components/Common/Page404';


const RouterContext = createContext([]);


const Home = _ => {
    return (
        <div>
            <h1>HOME</h1>
            <a href="/#bebras/22">Bebras</a>
            <a href="/#zebras/22">Zebras</a>
            <a href="/#">Home</a>
        </div>
    );
}

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
        { path: '#', pc: 0, component: <Home /> },
        { path: '#bebras', pc: 1, component: <Bebras /> },
        { path: '#zebras', pc: 1, component: <Zebras /> },
    ];

    const routeComponent = routes.find(r => r.path === route && r.pc === params.length)?.component ?? <Page404/>

    return (
        <RouterContext.Provider value={params}>
            {routeComponent}
        </RouterContext.Provider>
    )
}


export {
    RouterContext, Router
}