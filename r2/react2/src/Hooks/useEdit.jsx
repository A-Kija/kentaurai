import { useEffect, useState } from 'react';
import axios from 'axios';
import { editColor, removeOld, restoreOld } from '../Actions/colorsActions';

const useEdit = (serverUrl, dispachColors, addMessage) => {

    const [edit, setEdit] = useState(null);
    const [update, setUpdate] = useState(null);



    useEffect(_ => {
        if (null === update) {
            return;
        }
        dispachColors(editColor(update));
        addMessage({ title: 'Colors', type: 'info', text: 'Editing new color...' });
        axios.put(`${serverUrl}colors/${update.id}`, update)
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    dispachColors(removeOld());
                    addMessage(res.data.msg);
                } else {
                    dispachColors(restoreOld());
                }
            })
            .catch(error => {
                console.log(error);
                dispachColors(restoreOld());
                addMessage({ title: 'Colors', type: 'error', text: 'Server error' });
            });
        setUpdate(null);
    }, [update, serverUrl, addMessage, dispachColors]);




    return { edit, setEdit, setUpdate }

}

export default useEdit;