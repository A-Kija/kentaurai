import { createContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const MessagesContext = createContext();


export const Messages = ({children}) => {


    const [msg, setMsg] = useState([
        {id: 1, type: 'success', title: 'Hello', text: 'Bla bla bla, ku ku ku'},
        {id: 2, type: 'error', title: 'Bad', text: 'Bla bla bla, ku ku ku'}
    ]);

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


    return (
        <MessagesContext.Provider value={{
            remMessage, addMessage, msg
        }}>
            {children}
        </MessagesContext.Provider>
    )
}