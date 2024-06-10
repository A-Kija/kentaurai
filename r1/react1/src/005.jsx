import { useRef, useState } from 'react';

import './App.css';
import './buttons.scss';
import Buttons from './Components/005/Buttons';
import Counter from './Components/005/Counter';
import randomColor from './Functions/randColor';
import SqBin from './Components/005/SqBin';
import SqButtons from './Components/005/SqButtons';
import Parent from './Components/005/Parent';
import Link from './Components/005/Link';
function App() {

    const [counter, setCounter] = useState(50);
    const [sq, setSq] = useState([]);

    const id = useRef(1);

    const addSq = _ => {
        setSq(a => [...a, {
            id: id.current++,
            color: randomColor(),
            rotate: 0
        }]);
    }

    const rotateSq = id => {
        setSq(a => a.map(s => s.id === id ? { ...s, rotate: s.rotate + 15 } : s));
    }

    return (
        <div className="App">
            <header className="App-header">
                <Counter counter={counter} />
                <Buttons setCounter={setCounter} />
                <SqBin sq={sq} rotateSq={rotateSq} />
                <SqButtons addSq={addSq} />
                <Parent>
                    <h2>I'm here!</h2>
                </Parent>
                <Link to="https://google.com">
                <div>Go to GOOGLE<span>-----</span></div>
                <div>Run to GOOGLE</div>
                <div>Dont go to GOOGLE</div>
                </Link>
            </header>
        </div>
    );
}

export default App;