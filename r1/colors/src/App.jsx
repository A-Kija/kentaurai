import List from './Components/List';
import './app.scss';
import * as storage from './Functions/ls';
import Create from './Components/Create';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Messages from './Components/Messages';

const dv = {
  shape: '',
  color: '#f267d8',
  range: 5
}

const KEY = 'colors';

export default function App() {


  const [route, setRoute] = useState('landing');

  const [colors, setColors] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());
  const [create, setCreate] = useState(null);
  const [store, setStore] = useState(null);
  const [remove, setRemove] = useState(null); // delete
  const [destroy, setDestroy] = useState(null);
  const [edit, setEdit] = useState(null);
  const [update, setUpdate] = useState(null);

  const [msg, setMsg] = useState([]);

  const remMessage = useCallback(id => {
    setMsg(msgs => msgs.filter(m => m.id !== id));
  }, []);

  const addMessage = useCallback(m => {
    const id = uuidv4();
    setMsg(msgs => [{ ...m, id }, ...msgs]);
    setTimeout(_ => {
      remMessage(id);
    }, 5000);
  }, [remMessage]);

  const getTitle = useCallback((id, color) => {
    axios.get('https://www.thecolorapi.com/id?hex=' + color.substring(1))
      .then(res => {
        const title = res.data.name.value;
        storage.lsEdit(KEY, { title }, id);
        addMessage({ title: 'API', type: 'info', text: 'Color name was successfully received' });
        setRefresh(Date.now());
      })
      .catch(error => {
        console.log(error);
      });
  }, [addMessage]);


  useEffect(_ => {
    setColors(storage.lsRead(KEY));
  }, [refresh]);

  useEffect(_ => {
    if (null === store) {
      return;
    }
    const id = storage.lsCreate(KEY, store);
    addMessage({ title: 'Colors', type: 'success', text: 'Color was added successfully' });
    getTitle(id, store.color);
    setStore(null);
    setRefresh(Date.now());

  }, [store, getTitle, addMessage]);

  useEffect(_ => {
    if (null === destroy) {
      return;
    }
    storage.lsDelete(KEY, destroy.id);
    addMessage({ title: 'Colors', type: 'success', text: 'Color was deleted successfully' });
    setDestroy(null);
    setRefresh(Date.now());
  }, [destroy, addMessage]);

  useEffect(_ => {
    if (null === update) {
      return;
    }
    storage.lsEdit(KEY, update, update.id);
    addMessage({ title: 'Colors', type: 'success', text: 'Color was edited successfully' });
    getTitle(update.id, update.color);
    setUpdate(null);
    setRefresh(Date.now());
  }, [update, getTitle, addMessage]);


  if (route === 'landing') {
    return (
      <div className="landing">
        <div className="bin">
          <h1>Landing Page</h1>
          <div class="link" onClick={_ => setRoute('colors')}>go to colors</div>
        </div>
      </div>
    )
  }


  if (route === 'colors') {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="buttons">
                <button type="button" className="blue" onClick={_ => setCreate(dv)}>Add new color</button>
                <button type="button" className="white" onClick={_ => setRoute('landing')}>go to Landing</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <List colors={colors} setRemove={setRemove} setEdit={setEdit} />
            </div>
          </div>
        </div>
        {create !== null && <Create setCreate={setCreate} create={create} setStore={setStore} addMessage={addMessage} />}
        {remove !== null && <Delete setRemove={setRemove} remove={remove} setDestroy={setDestroy} />}
        {edit !== null && <Edit setEdit={setEdit} edit={edit} setUpdate={setUpdate} />}
        <Messages msg={msg} remMessage={remMessage} />
      </>
    );
  }
}