import { useState } from 'react';
import './App.css';
import './buttons.scss';
function App() {

    const [count, setCount] = useState(100);
    const [figure, setFigure] = useState('square');
    const [sq, setSq] = useState([0,2,1, 'a']);

    const add1 = _ => {
        setCount(oldCount => oldCount + 1);
    }

    const minus1 = _ => {
        setCount(oldCount => oldCount - 1);
    }

    const reset = _ => {
        setCount(0);
    }

    const big = _ => {
        setCount(oldCount => oldCount * oldCount);
    }

    const changeFigure = _ => {
        setFigure(f => f === 'square' ? 'circle' : 'square');
    }

    const addSq = _ => {

    }

    return (
        <div className="App">
            <header className="App-header">
                <div
                    onClick={changeFigure}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        width: '200px',
                        height: '200px',
                        transition: 'all 0.5s',
                        backgroundColor: figure === 'square' ? 'skyblue' : 'crimson',
                        borderRadius: figure === 'square' ? null : '50%',
                    }}><h1>{count}</h1></div>
                
                <div className="sq-bin">

                    {
                        sq.map((s, i) => <div key={i} className="sq"></div>)
                    }

                </div>
                
                <div className="buttons">
                    <button type="button" className="green" onClick={add1}> +1 </button>
                    <button type="button" className="blue" onClick={minus1}> -1 </button>
                    <button type="button" className="red" onClick={reset}> 0 </button>
                    <button type="button" className="yellow" onClick={big}> ** </button>
                    <button type="button" className="green" onClick={addSq}> Add </button>
                </div>
            </header>
        </div>
    );
}

export default App;