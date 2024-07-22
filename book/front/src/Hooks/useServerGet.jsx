import axios from 'axios';
import * as l from '../Constants/urls';
import { useCallback, useContext, useState } from 'react';
import { MessagesContext } from '../Contexts/Messages';
import { LoaderContext } from '../Contexts/Loader';
import { AuthContext } from '../Contexts/Auth';


const useServerGet = url => {

    const [response, setResponse] = useState(null);

    const { messageError, messageSuccess } = useContext(MessagesContext);

    const { setShow } = useContext(LoaderContext);

    const { removeUser } = useContext(AuthContext);

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
                    window.location.href = l.SITE_LOGIN;
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