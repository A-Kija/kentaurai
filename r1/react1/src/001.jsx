import './App.css';
import Bebras from './Components/001/Bebras';



function App() {

  function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const T2 = 10 * 22;

  const ten = _ => {
    return 2 * 11;
  }

  const el1 =
    <>
      <h3>valio {3 * 7} kartą</h3>
      <span>!</span>
    </>;

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={
          {
            color: 'skyblue',
            letterSpacing: rand(10, 50) + 'px'
          }
        }>Hello, Little REACT</h1>
        <div>{ten()}</div>
        <div>{2 * 9}</div>
        <div>{T2}</div>
        <div>{el1}</div>
        <div>{el1}</div>
        <div>
          <div>AAA</div>
        </div>

        <Bebras />
      </header>
    </div>
  );
}

export default App;
