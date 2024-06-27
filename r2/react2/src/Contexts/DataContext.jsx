import { createContext } from 'react';
import useCreate from '../Hooks/useCreate';

export const DataContext = createContext();


export const Data = ({children}) => {

    const { create, setCreate, store, setStore } = useCreate();


    return (
        <DataContext.Provider value={{
            create, setCreate, store, setStore
        }}>
            {children}
        </DataContext.Provider>
    );
}