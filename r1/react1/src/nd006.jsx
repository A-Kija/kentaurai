import { useState } from 'react';
import './App.css';
import './Styles/ganykla.scss';
import './buttons.scss';

function App() {

    const types = ['K', 'A'];
    const divClass = ['cow', 'sheep']

    const [field, setField] = useState([]);

    const rand = (min, max) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    const getNumber = type => {
        let number = rand(0, 999999);
        number = '' + number;
        number = number.padStart(6, '0');
        return type + number;
    }

    const start = _ => {
        setField([]);
        types.forEach((type, field) => {
            const count = rand(5, 25);
            for (let i = 0; i < count; i++) {
                setField(f => [...f, { id: getNumber(type), field, type }]);
            }
        });
    }

    const changeField = id => {
        setField(f => f.map(a => a.id === id ? { ...a, field: (a.field ? 0 : 1) } : a));
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className="fields">
                    <div className="buttons">
                        <button type="button" className="green" onClick={start}>Ganytis!</button>
                        <button type="button" className="yellow" onClick={_ => setField([])}>Namo!</button>
                    </div>
                    <div className="field first">
                        {
                            field.map(a => a.field === 0
                                ?
                                <div
                                    key={a.id}
                                    onClick={_ => changeField(a.id)}
                                    className={divClass[types.findIndex(t => a.type === t)]}>
                                    {a.id}
                                </div>
                                : null
                            )
                        }
                    </div>
                    <div className="field">
                        {
                            field.toSorted((a, b) => a.type.localeCompare(b.type) ).map(a => a.field === 1
                                ?
                                <div
                                    key={a.id}
                                    onClick={_ => changeField(a.id)}
                                    className={divClass[types.findIndex(t => a.type === t)]}>
                                    {a.id}
                                </div>
                                : null
                            )
                        }
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;