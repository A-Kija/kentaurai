import axios from 'axios';
import { SERVER_URL } from '../Constants/urls';
import { useContext, useState } from 'react';
import { MessagesContext } from '../Contexts/Messages';

const useServerGet = url => {

    const [response, setResponse] = useState(null);

    const { messageError, messageSuccess } = useContext(MessagesContext);

    const doAction = _ => {

        axios.post(`${SERVER_URL}${url}`)
            .then(res => {
                messageSuccess(res);
                setResponse({
                    type: 'success',
                    data: res.data
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
    }

    return { doAction, serverResponse: response };

}

export default useServerGet;