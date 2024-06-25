import { createContext, useState } from 'react';

export const CounterContext = createContext();



export default function Counter({children}) {

    const [counter, setCounter] = useState(0);

    const add = _ => {
        setCounter(c => {
            if (c >= 5) {
                return 0;
            }
            return c + 1;
        });
    }


    return (
        <CounterContext.Provider value={{
            counter,
            add
        }}>
        {children}
        </CounterContext.Provider>
    );
}