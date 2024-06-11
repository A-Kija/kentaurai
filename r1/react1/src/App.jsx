import { useCallback, useEffect, useState } from 'react';
import './App.css';
import './buttons.scss';
import Sq from './Components/007/Sq';
import rand from './Functions/rand';
function App() {


    const [countLetter, setCountLetter] = useState(3);
    const [letters, setLetters] = useState('');
    const [sq, setSq] = useState([]);

    const makeLetters = useCallback( _ => {
        if (countLetter <= 5) {
            setLetters('A'.repeat(countLetter));
        } else {
            setLetters('B'.repeat(countLetter));
        }
    }, [setLetters, countLetter]);

    const doCount = _ => {
        setCountLetter(c => c + 1);
    }

    const makeSq = _ => {
        setSq(s => [{id: rand(1000000, 9999999)}, ...s]);
    }
    
    const destroySq = id => {
        setSq(s => s.filter(sq => sq.id !== id));
    }

    useEffect(_ => {
        makeLetters();
    }, [countLetter, makeLetters]);

    useEffect(_ => {
        console.log(sq.length);
    }, [sq]);




    return (
        <div className="App">
            <header className="App-header">
                <div className="sq-bin">
                    {
                        sq.map(s => <Sq key={s.id} sq={s} destroySq={destroySq} />)
                    }
                </div>
                <h1>{letters}</h1>
                <div className="buttons">
                    <button type="button" className="green" onClick={doCount}>{countLetter}</button>
                    <button type="button" className="blue" onClick={makeSq}>ADD []</button>
                </div>
            </header>
        </div>
    );
}

export default App;