import List from './Components/List';
import './app.scss';
import * as storage from './Functions/ls';
import Create from './Components/Create';
import { useState } from 'react';

export default function App() {

  const [create, setCreate] = useState(null);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="buttons">
              <button type="button" className="blue">Add new color</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <List />
          </div>
        </div>
      </div>
      <Create setCreate={setCreate} />
    </>
  );
}