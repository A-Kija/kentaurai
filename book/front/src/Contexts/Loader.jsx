import { createContext, useState } from 'react';

export const LoaderContext = createContext();

export const Loader = ({children}) => {

    const [show, setShow] = useState(true);

    return (
        <LoaderContext.Provider value={{
            show, setShow
        }}>
            {children}
        </LoaderContext.Provider>
    );
}