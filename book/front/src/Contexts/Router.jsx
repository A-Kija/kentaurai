import { createContext, useState } from 'react';

const RouterContext = createContext([]);




const Router = _ => {


    const [route, setRoute] = useState('');
    const [params, setParams] = useState([]);


    return (
        <RouterContext.Provider value={[]}>
            <h1>RC</h1>
        </RouterContext.Provider>
    )
}


export {
    RouterContext, Router
}