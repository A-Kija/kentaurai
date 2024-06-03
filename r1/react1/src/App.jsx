import './App.css';
import Price from './Components/002/Price2';
function App() {


    const price = 100;
    const vatColor = 'orange';

    return (
        <div className="App">
            <header className="App-header">
                <h1>002</h1>
                <Price productPrice={price} discount={20} vatColor={vatColor}/>
            </header>
        </div>
    );
}

export default App;
