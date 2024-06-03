import './App.css';
import A from './Components/001/A';
import './Components/001/nd-style.css';

function App() {

  const d = <div className="d-style"></div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>ND 001</h1>
        <A />
        {d}{d}{d}
      </header>
    </div>
  );
}

export default App;
