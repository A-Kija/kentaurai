import { useEffect } from 'react';

export default function Sq({sq, destroySq}) {


    useEffect(_ => {
        console.log(sq.id);
        return _ => console.log(sq.id, 'OUT');
    }, [sq]);

    return (
        <div className="sq" onClick={_ => destroySq(sq.id)}>{sq.id}</div>
    );



}