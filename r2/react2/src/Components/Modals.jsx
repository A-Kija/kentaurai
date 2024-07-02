import { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';
import Create from './Create';
import Delete from './Delete';

export default function Modals() {

const { create, remove } = useContext(DataContext);


    if (create) {
        return <Create />
    }

    if (remove) {
        return <Delete />
    }


    return null;



}