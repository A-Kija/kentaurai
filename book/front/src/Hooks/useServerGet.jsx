import axios from 'axios';
import { SERVER_URL } from '../Constants/urls';
import { useCallback, useContext, useState } from 'react';
import { MessagesContext } from '../Contexts/Messages';

const useServerGet = url => {

    const [response, setResponse] = useState(null);

    const { messageError, messageSuccess } = useContext(MessagesContext);

    const doAction = useCallback((dataString = '') => {

        axios.get(`${SERVER_URL}${url}${dataString}`)
            .then(res => {
                messageSuccess(res);
                setResponse({
                    type: 'success',
                    serverData: res.data
                });
            })
            .catch(error => {
                console.log(error);
                messageError(error);
                setResponse({
                    type: 'error',
                    serverData: error
                });
            });
    }, [messageError, messageSuccess, url]);

    return { doAction, serverResponse: response };

}

export default useServerGet;