import { useContext } from 'react';
import { ButtonContext, RangeContext } from '../../App';

export default function A() {

    const { color, counter } = useContext(ButtonContext);
    const range = useContext(RangeContext);

    return (
        <button type="button" className={color} onClick={_ => counter(c => c + range)}>Button</button>
    );
}