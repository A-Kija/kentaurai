import { createContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const MessagesContext = createContext();


export const Messages = ({ children }) => {


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

    const messageError = useCallback(error => {
        if (!error.response) {
            addMessage({ type: 'error', title: 'Server error', text: error.message });
        } else {
            addMessage({ type: 'error', title: 'Server error ' + error.response.status , text: error.response.data.message });
        }
    }, [addMessage]);

    const messageSuccess = useCallback(res => {
        if (!res.data.message) {
            return;
        }
        addMessage({ type: res.data.message.type, title: res.data.message.title, text: res.data.message.text });
    }, [addMessage]);


    return (
        <MessagesContext.Provider value={{
            remMessage, addMessage, msg, messageError, messageSuccess
        }}>
            {children}
        </MessagesContext.Provider>
    )
}