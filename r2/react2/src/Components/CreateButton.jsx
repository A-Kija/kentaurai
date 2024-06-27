import { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';

export default function CreateButton() {

    const { setCreate, dv } = useContext(DataContext);

    return (
        <div className="buttons">
            <button type="button" className="blue" onClick={_ => setCreate(dv)}>Add new color</button>
        </div>
    );
}