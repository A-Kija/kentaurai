import { Messages } from './Contexts/Messages';
import { Router } from './Contexts/Router';
import { Modals } from './Contexts/Modals'
import Msg from './Components/Common/Messages';
import './Style/main.scss';
import DeleteModal from './Components/Common/DeleteModal';
import { Loader } from './Contexts/Loader';
import LoaderContainer from './Components/Common/Loader';

export default function App() {
  return (
    <Messages>
      <Loader>
        <Modals>
          <Msg />
          <DeleteModal />
          <LoaderContainer />
          <Router />
        </Modals>
      </Loader>
    </Messages>
  );
}