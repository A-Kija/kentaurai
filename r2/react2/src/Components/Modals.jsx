import { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';
import Create from './Create';
import Delete from './Delete';
import Edit from './Edit';

export default function Modals() {

const { create, remove, edit } = useContext(DataContext);


    if (create) {
        return <Create />
    }

    if (remove) {
        return <Delete />
    }

    if (edit) {
        return <Edit />
    }


    return null;



}