import { useContext } from 'react';
import { ButtonContext } from '../../App';

export default function A() {

    const { color, counter } = useContext(ButtonContext);

    return (
        <button type="button" className={color} onClick={_ => counter(c => c + 1)}>Button</button>
    );
}