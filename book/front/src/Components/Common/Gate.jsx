import { useContext } from 'react';
import { AuthContext } from '../../Contexts/Auth';

export default function Gate({ children, status, role = [] }) {

    const { user } = useContext(AuthContext);

    if (status === 'logged' && user) {
        return children;
    }

    if (status === 'not-logged' && !user) {
        return children;
    }

    if (status === 'role' && user && role.includes(user.role)) {
        return children;
    }

    return null;
    
}