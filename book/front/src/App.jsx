import { Messages } from './Contexts/Messages';
import { Router } from './Contexts/Router';
import { Modals } from './Contexts/Modals'
import Msg from './Components/Common/Messages';
import './Style/main.scss';
import DeleteModal from './Components/Common/DeleteModal';

export default function App() {
  return (
    <Messages>
      <Modals>
        <Msg />
        <DeleteModal />
        <Router />
      </Modals>
    </Messages>
  );
}