import List from './Components/List';
import './app.scss';
import * as storage from './Functions/ls';
import Create from './Components/Create';
import { useEffect, useState } from 'react';

const dv = {
  shape: 'square',
  color: '#f267d8',
  range: 5
}

const KEY = 'colors';

export default function App() {

  const [colors, setColors] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());
  const [create, setCreate] = useState(null);
  const [store, setStore] = useState(null);

  useEffect(_ => {
    setColors(storage.lsRead(KEY));
  }, [refresh]);



  useEffect(_ => {
    if (null === store) {
      return;
    }
    storage.lsCreate(KEY, store);
    setStore(null);
    setRefresh(Date.now());
  }, [store]);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="buttons">
              <button type="button" className="blue" onClick={_ => setCreate(dv)}>Add new color</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <List colors={colors} />
          </div>
        </div>
      </div>
      { create !== null && <Create setCreate={setCreate} create={create} setStore={setStore} /> }
        
    </>
  );
}