import axios from 'axios';
import { SERVER_URL } from '../Constants/urls';
import { useContext, useState } from 'react';
import { MessagesContext } from '../Contexts/Messages';
import { LoaderContext } from '../Contexts/Loader';

const useServerPut = url => {

    const [response, setResponse] = useState(null);

    const { messageError, messageSuccess } = useContext(MessagesContext);

    const { setShow } = useContext(LoaderContext);

    const doAction = data => {

        axios.put(`${SERVER_URL}${url}/${data.id}`, data, { withCredentials: true })
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
            })
            .finally(_ => {
                setShow(false);
            });

    }


    return { doAction, serverResponse: response };

}

export default useServerPut;