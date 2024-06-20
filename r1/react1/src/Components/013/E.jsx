
import { useContext } from 'react';
import { DataContext } from './Data';

export default function E() {

    const v = useContext(DataContext);

    return (
        <h2>{v}</h2>
    );
}