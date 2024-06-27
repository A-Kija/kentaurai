import Create from './Components/Create';
import CreateButton from './Components/CreateButton';
import { Data } from './Contexts/DataContext';
import './app.scss';

export default function App() {
  return (
    <Data>
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateButton />
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

