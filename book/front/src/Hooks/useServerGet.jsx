import axios from 'axios';
import * as l from '../Constants/urls';
import { useCallback, useContext, useState } from 'react';
import { MessagesContext } from '../Contexts/Messages';
import { LoaderContext } from '../Contexts/Loader';
import { AuthContext } from '../Contexts/Auth';
import { RouterContext } from '../Contexts/Router';


const useServerGet = url => {

    const [response, setResponse] = useState(null);
    const { messageError, messageSuccess } = useContext(MessagesContext);
    const { setShow } = useContext(LoaderContext);
    const { removeUser } = useContext(AuthContext);
    const { prevPageLink } = useContext(RouterContext);
    
    const doAction = useCallback((dataString = '') => {

        axios.get(`${l.SERVER_URL}${url}${dataString}`, { withCredentials: true })
            .then(res => {
                messageSuccess(res);
                setResponse({
                    type: 'success',
                    serverData: res.data
                });
            })
            .catch(error => {
                messageError(error);
                if (error.response && 401 === error.response.status && 'not-logged-in' === error.response.data.reason) {
                    removeUser();
                    window.location.hash = l.SITE_LOGIN;
                    return;
                }
                if (error.response && 401 === error.response.status && 'not-authorized' === error.response.data.reason) {
                    window.location.hash = prevPageLink[0];
                    return;
                }
                setResponse({
                    type: 'error',
                    serverData: error
                });
            })
            .finally(_ => {
                setShow(false);
            });

    }, [messageError, messageSuccess, url, setShow]);

    return { doAction, serverResponse: response };

}

export default useServerGet;