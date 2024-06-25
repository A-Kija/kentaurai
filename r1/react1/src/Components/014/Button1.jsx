import { useContext } from 'react';
import { CounterContext } from './Counter';

export default function Button1() {

    const { add, counter } = useContext(CounterContext);


    return (
        <button type="button" className="green" onClick={add}>ADD ({counter})</button>
    );
}