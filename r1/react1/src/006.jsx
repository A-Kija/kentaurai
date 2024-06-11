import { useEffect, useState, useRef } from 'react';
import './App.css';
import './buttons.scss';
function App() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const greenLoaded = useRef(false);

    // console.log('OUTSIDE USE EFFECT');

    useEffect(_ => {
        if (!greenLoaded.current) {
            greenLoaded.current = true;
            return;
        }
        console.log('REFRESH BY GREEN!', count1);
    }, [count1]);

    useEffect(_ => {
        console.log('REFRESH BY YELLOW!');
    }, [count2]);

    // useEffect(_ => {
    //     console.log('REFRESH BY YELLOW OR GREEN!');
    // }, [count1, count2]);

    const clickGreen = _ => {
        setCount1(c => c + 1);
    }

    const clickYellow = _ => {
        setCount2(c => c + 1);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Use Effect</h1>
                <div className="buttons">
                    <button type="button" className="green" onClick={clickGreen}>{count1}</button>
                    <button type="button" className="yellow" onClick={clickYellow}>{count2}</button>
                </div>
            </header>
        </div>
    );
}

export default App;