import { useContext } from 'react';
import { AuthContext } from '../../Contexts/Auth';
import { RouterContext } from '../../Contexts/Router';

export default function RouteGate({ children, role = [] }) {

    const { user } = useContext(AuthContext);
    const { prevPageLink } = useContext(RouterContext);

    if (user && role.includes(user.role)) {
        return children;
    } else {
        window.location.hash = prevPageLink[0];
    }

    return null;
}