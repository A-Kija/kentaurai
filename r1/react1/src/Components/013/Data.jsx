import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const DataContext = createContext();


export default function Data({ children }) {

    const [tic, setTic] = useState(0);


    useEffect(_ => {
        const timer = setInterval(_ => {
            setTic(t => t + 1);
        }, 1000);
        return _ => clearInterval(timer);

    }, []);

    return (
        <DataContext.Provider value={tic}>
            {children}
        </DataContext.Provider>
    );

}