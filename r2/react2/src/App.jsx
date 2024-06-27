import Create from './Components/Create';
import { Data } from './Contexts/DataContext';
import './app.scss';

export default function App() {
  return (
    <Data>
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
            LIST
          </div>
        </div>
      </div>
      <Create />
    </Data>
  );
}

