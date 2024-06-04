import './App.css';
import Fruit from './Components/003/Fruit';
import Fig from './Components/003/Fig';
function App() {

    const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'pear', 'quince', 'raspberry', 'strawberry', 'tangerine', 'ugli', 'watermelon'];

    const fruits2 = [
        { id: 1, name: 'apple', color: 'red' },
        { id: 2, name: 'banana', color: 'yellow' },
        { id: 3, name: 'cherry', color: 'red' },
        { id: 4, name: 'date', color: 'brown' },
        { id: 5, name: 'elderberry', color: 'black' },
        { id: 6, name: 'fig', color: 'purple' },
        { id: 7, name: 'grape', color: 'purple' },
        { id: 8, name: 'honeydew', color: 'green' },
        { id: 9, name: 'kiwi', color: 'brown' },
        { id: 10, name: 'lemon', color: 'yellow' },
        { id: 11, name: 'mango', color: 'orange' },
        { id: 12, name: 'nectarine', color: 'orange' },
        { id: 13, name: 'orange', color: 'orange' },
        { id: 14, name: 'pear', color: 'green' },
        { id: 15, name: 'quince', color: 'yellow' },
        { id: 16, name: 'kiwi', color: 'brown' },
        { id: 17, name: 'cherry', color: 'red' }
    ];


    return (
        <div className="App">
            <header className="App-header">
                <h1>003</h1>
                <ul>
                    {
                        fruits2.map(f => f.name !== 'fig'
                            ?
                            <Fruit key={f.id} fruit={f} />
                            :
                            <Fig key={f.id} fruit={f} />
                        )
                    }
                    {
                        fruits2
                            .sort((a, b) => a.name.length - b.name.length)
                            .map(f =>
                                <li key={f.id} style={{ color: f.color }}>
                                    <i>{f.name}</i>
                                </li>
                            )
                    }
                </ul>
                <ul>
                    {
                        fruits
                            .sort((a, b) => a.length - b.length)
                            .map((f, i) => f.length > 5
                                ?
                                <li style={{ color: 'skyblue' }} key={i}>{f}</li>
                                :
                                <li style={{ color: 'crimson' }} key={i}>{f}</li>
                            )
                    }
                </ul>
            </header>
        </div>
    );
}

export default App;