import List from './Components/List';
import './app.scss';
import * as storage from './Functions/ls';

export default function App() {
  return (
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
          {storage.lsRead('a')}
          <List />
        </div>
      </div>
    </div>
  );
}