import './App.css';
import countReducer from './Components/015/countReducer';
import './buttons.scss';
import { useReducer, useState } from 'react';
import * as A from './Actions/counterActions';

function App() {

    const [count1, setCount1] = useState(0);
    const [count2, dispachCount2] = useReducer(countReducer, 0);
    const [range, setRange] = useState(0);

    // const add1 = _ => {
    //     const action = {
    //         type: T.ADD_1
    //     };
    //     dispachCount2(action);
    // }

    // const rem1 = _ => {
    //     const action = {
    //         type: T.REM_1
    //     }
    //     dispachCount2(action);
    // }

    // const addRange = _ => {
    //     const action = {
    //         type: T.ADD_RANGE,
    //         payload: range
    //     }
    //     dispachCount2(action);
    // }


    return (
        <div className="App">
            <header className="App-header">
                <h1>State: {count1} Reducer: {count2} </h1>
                <div className="buttons">
                    <button type="button" className="green" onClick={_ => setCount1(c => c + 1)}>add 1 (with state)</button>
                    <button type="button" className="red" onClick={_ => dispachCount2(A.add1())}>add 1 (with reducer)</button>
                    <button type="button" className="yellow" onClick={_ => dispachCount2(A.rem1())}>rem 1 (with reducer)</button>
                </div>
                <div className="buttons">
                    <button type="button" className="blue" onClick={_ => dispachCount2(A.addRange(range))}>add {range} (with reducer)</button>
                    <input type='range' min="-99" max="99" step="1" value={range} onChange={e => setRange(+e.target.value)}/>
                </div>
            </header>
        </div>
    );
}

export default App;
