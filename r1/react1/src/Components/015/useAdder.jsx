import { useState } from 'react';

export default function useAdder(start) {

    const [count, setCount] = useState(start);

    const add1 = _ => {
        setCount(c => c + 1);
    }

    const add10 = _ => {
        setCount(c => c + 10);
    }

    return [count, add1, add10];

}