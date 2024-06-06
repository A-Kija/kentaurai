import { useState } from 'react';

import './App.css';
import './buttons.scss';
import Buttons from './Components/005/Buttons';
import Counter from './Components/005/Counter';
function App() {

    const [counter, setCounter] = useState(50);

    return (
        <div className="App">
            <header className="App-header">
                <Counter counter={counter} />
                <Buttons setCounter={setCounter} />
            </header>
        </div>
    );
}

export default App;