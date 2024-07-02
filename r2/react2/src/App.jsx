import CreateButton from './Components/CreateButton';
import List from './Components/List';
import Messages from './Components/Messages';
import Modals from './Components/Modals';
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
            <List />
          </div>
        </div>
      </div>
      <Modals />
      <Messages />
    </Data>
  );
}

