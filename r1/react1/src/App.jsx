import './App.css';
import Vat from './Components/002/Vat';
function App() {


    const price = 260;

    return (
        <div className="App">
            <header className="App-header">
                <h1>002</h1>
                <div><span>Price:</span> <b>{price} Eur</b></div>
                <Vat productPrice={price} color='skyblue' show={'small'} />
            </header>
        </div>
    );
}

export default App;
