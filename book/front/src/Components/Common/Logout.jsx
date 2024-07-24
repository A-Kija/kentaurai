import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/Auth';
import * as l from '../../Constants/urls';
import useServerPost from '../../Hooks/useServerPost';
import { LoaderContext } from '../../Contexts/Loader';

export default function Logout() {

    const { user, removeUser } = useContext(AuthContext);
    const { doAction, serverResponse } = useServerPost(l.SERVER_LOGOUT);
    const { setShow } = useContext(LoaderContext);

    useEffect(_ => {
        if (null === serverResponse) {
            return;
        }
        if (serverResponse.type === 'success') {
            removeUser()
            window.location.hash = l.SITE_LOGIN;
        }
    }, [serverResponse, removeUser]);

    return (
        <button className="link" onClick={_ => doAction() || setShow(true)}><span className="label">Atsijungti, {user.name}</span></button>
    );

}