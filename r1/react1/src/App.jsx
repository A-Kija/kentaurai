import { createContext } from 'react';
import './App.css';
import './buttons.scss';

import C from './Components/013/C';
import { useState } from 'react';


export const ButtonContext = createContext();

function App() {

    const [greenCount, setGreenCount] = useState(0);

    const [yellowCount, setYellowCount] = useState(0);



    return (
        <div className="App">
            <header className="App-header">
                <h1>Context</h1>

                <h1 style={{ color: '#04724D' }}>{greenCount}</h1>
                <h1 style={{ color: '#F9C846' }}>{yellowCount}</h1>
                <div className="buttons">

                    <ButtonContext.Provider value={
                        {
                            color: 'green',
                            counter: setGreenCount
                        }
                    }>
                        <C />
                    </ButtonContext.Provider>

                    <ButtonContext.Provider value={
                        {
                            color: 'yellow',
                            counter: setYellowCount
                        }
                    }>
                        <C />
                    </ButtonContext.Provider>

                </div>
            </header>
        </div>
    );
}

export default App;
