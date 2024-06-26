import './App.css';
import './buttons.scss';
import { useState } from 'react';

function App() {

    const [count1, setCount1] = useState(0)


    return (
        <div className="App">
            <header className="App-header">
                <h1>State: {count1} Reducer: 0 </h1>
                <div className="buttons">
                    <button type="button" className="blue" onClick={_ => setCount1(c => c + 1)}>add 1 (with state)</button>
                    <button type="button" className="red">add 1 (with reducer)</button>
                </div>
            </header>
        </div>
    );
}

export default App;
