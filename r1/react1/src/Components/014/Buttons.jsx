import { useContext } from 'react';
import { CounterContext } from './Counter';

export default function Buttons() {

    return (
        <h2>Sub Buttons</h2>
    );
}

const Blue = _ => {
    const { add, counter } = useContext(CounterContext);
    return (
        <button type="button" className="blue" onClick={add}>ADD ({counter})</button>
    );
}

const Yellow = _ => {
    const { add, counter } = useContext(CounterContext);
    return (
        <button type="button" className="yellow" onClick={add}>ADD ({counter})</button>
    );
}

Buttons.Blue = Blue;
Buttons.Yellow = Yellow;