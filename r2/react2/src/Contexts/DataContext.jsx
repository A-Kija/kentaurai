import { createContext } from 'react';
import useCreate from '../Hooks/useCreate';
import useRead from '../Hooks/useRead';

export const DataContext = createContext();

const dv = {
    shape: '',
    color: '#07cc44',
    range: 5
}

const serverUrl = 'http://localhost:3001/';


export const Data = ({children}) => {

    const { colors, dispachColors } = useRead(serverUrl);

    const { create, setCreate, setStore } = useCreate(serverUrl, dispachColors);


    return (
        <DataContext.Provider value={{
            create, setCreate, setStore,
            dv,
            colors
        }}>
            {children}
        </DataContext.Provider>
    );
}