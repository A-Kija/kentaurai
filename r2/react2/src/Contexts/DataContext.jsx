import { createContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useCreate from '../Hooks/useCreate';
import useRead from '../Hooks/useRead';
import useDelete from '../Hooks/useDelete';
import useEdit from '../Hooks/useEdit';

export const DataContext = createContext();

const dv = {
    shape: '',
    color: '#07cc44',
    range: 5
}

const serverUrl = 'http://localhost:3001/';


export const Data = ({children}) => {

    const [msg, setMsg] = useState([]);

    const remMessage = useCallback(id => {
        setMsg(msgs => msgs.filter(m => m.id !== id));
      }, []);
    
      const addMessage = useCallback(m => {
        const id = uuidv4();
        setMsg(msgs => [{ ...m, id }, ...msgs]);
        setTimeout(_ => {
          remMessage(id);
        }, 5000);
      }, [remMessage]);

    const { colors, dispachColors } = useRead(serverUrl);

    const { create, setCreate, setStore } = useCreate(serverUrl, dispachColors, addMessage);

    const { remove, setRemove, setDestroy } = useDelete(serverUrl, dispachColors, addMessage);

    const { edit, setEdit, setUpdate } = useEdit(serverUrl, dispachColors, addMessage);




    return (
        <DataContext.Provider value={{
            remMessage, addMessage, msg,
            create, setCreate, setStore,
            remove, setRemove, setDestroy,
            edit, setEdit, setUpdate,
            dv,
            colors
        }}>
            {children}
        </DataContext.Provider>
    );
}