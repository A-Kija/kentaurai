import { createContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ModalsContext = createContext();


export const Modals = ({ children }) => {


    const [deleteModal, setDeleteModal] = useState(null);


    return (
        <ModalsContext.Provider value={{
            deleteModal
        }}>
            {children}
        </ModalsContext.Provider>
    )
}