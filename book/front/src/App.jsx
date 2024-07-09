import { Messages } from './Contexts/Messages';
import { Router } from './Contexts/Router';
import Msg from './Components/Common/Messages';
import './Style/main.scss';

export default function App() {
  return (
    <Messages>
      <Msg />
      <Router />
    </Messages>
  );
}