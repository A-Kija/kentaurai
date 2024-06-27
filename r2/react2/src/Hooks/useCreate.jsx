import { useState } from 'react';

const useCreate = () => {

    const [create, setCreate] = useState(null);
    const [store, setStore] = useState(null);







    return { create, setCreate, store, setStore }

}

export default useCreate;