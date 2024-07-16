import { createContext, useState } from 'react';

export const ModalsContext = createContext();

export const Modals = ({ children }) => {

    const [deleteModal, setDeleteModal] = useState(null);

    return (
        <ModalsContext.Provider value={{
            deleteModal, setDeleteModal
        }}>
            {children}
        </ModalsContext.Provider>
    );
}