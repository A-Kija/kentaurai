import List from './Components/List';
import './app.scss';
import * as storage from './Functions/ls';
import Create from './Components/Create';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Messages from './Components/Messages';

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
  const [remove, setRemove] = useState(null); // delete
  const [destroy, setDestroy] = useState(null);
  const [edit, setEdit] = useState(null);
  const [update, setUpdate] = useState(null);

  const [msg, setMsg] = useState([]);

  const getTitle = useCallback((id, color) => {
    axios.get('https://www.thecolorapi.com/id?hex=' + color.substring(1))
    .then(res => {
      const title = res.data.name.value;
      storage.lsEdit(KEY, {title}, id);
      setRefresh(Date.now());
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  useEffect(_ => {
    setColors(storage.lsRead(KEY));
  }, [refresh]);

  useEffect(_ => {
    if (null === store) {
      return;
    }
    const id = storage.lsCreate(KEY, store);
    getTitle(id, store.color);
    setStore(null);
    setRefresh(Date.now());

  }, [store, getTitle]);

  useEffect(_ => {
    if (null === destroy) {
      return;
    }
    storage.lsDelete(KEY, destroy.id);
    setDestroy(null);
    setRefresh(Date.now());
  }, [destroy]);

  useEffect(_ => {
    if (null === update) {
      return;
    }
    storage.lsEdit(KEY, update, update.id);
    getTitle(update.id, update.color);
    setUpdate(null);
    setRefresh(Date.now());
  }, [update, getTitle]);


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
            <List colors={colors} setRemove={setRemove} setEdit={setEdit} />
          </div>
        </div>
      </div>
      { create !== null && <Create setCreate={setCreate} create={create} setStore={setStore} /> }
      { remove !== null && <Delete setRemove={setRemove} remove={remove} setDestroy={setDestroy} /> }
      { edit !== null && <Edit setEdit={setEdit} edit={edit} setUpdate={setUpdate} /> }
      <Messages msg={msg} />
    </>
  );
}