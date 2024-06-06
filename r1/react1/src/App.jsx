import { useState } from 'react';

import './App.css';
import './Styles/trees.scss';
import './buttons.scss';

const treeTypes = ['Ąžuolas', 'Uosis', 'Eglė'];

function App() {

    const [trees, setTrees] = useState([]);

    const plant = tree => {
        setTrees(t => [...t, tree])
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className="trees-bin">
                    {
                        treeTypes.map(treeType =>
                            <div className="tree-bin">
                                <div className="top">
                                    {
                                        trees.map((t, i) => t === treeType ? <div key={i} className="tree">{treeType}</div> : null)
                                    }
                                </div>
                                <div className="bottom">
                                    <div className="buttons">
                                        <button type="button" className="green" onClick={_ => plant(treeType)}>{treeType}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </header>
        </div>
    );
}

export default App;