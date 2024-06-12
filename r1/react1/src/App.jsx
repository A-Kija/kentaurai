import './App.css';
import './buttons.scss';
import { useState, useRef } from 'react';
function App() {

    const text2 = useRef();

    const [text1, setText1] = useState('');
    const [error, setError] = useState(false);


    const handleText1 = e => {
        if (e.target.value.length > 5) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        setText1(e.target.value);
    }

    // niekam tikęs būdas skaiyti inputus
    const readRed = _ => {
        // const el = document.querySelector('#text2'); niekada!
        // el yra text2.current
        console.log('text2:', text2.current.value);
    }



    return (
        <div className="App">
            <header className="App-header">
                <h1>CONTROLLED INPUTS</h1>

                <fieldset>
                    <legend>TEXT</legend>
                    <input type="text" value={text1} onChange={handleText1} style={{backgroundColor: error ? 'crimson' : null }} />
                    <input type="text" ref={text2} />
                    <button type="button" className="blue" onClick={_ => console.log('text1:', text1)}>read 1</button>
                    <button type="button" className="red" onClick={readRed}>read 2</button>
                </fieldset>

            </header>


        </div>
    );
}

export default App;