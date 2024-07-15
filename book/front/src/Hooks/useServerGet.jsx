import axios from 'axios';
import { SERVER_URL } from '../Constants/urls';
import { useCallback, useContext, useState } from 'react';
import { MessagesContext } from '../Contexts/Messages';

const useServerGet = url => {

    const [response, setResponse] = useState(null);

    const { messageError, messageSuccess } = useContext(MessagesContext);

    const doAction = useCallback(_ => {

        axios.get(`${SERVER_URL}${url}`)
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