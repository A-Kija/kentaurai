import axios from 'axios';
import { SERVER_URL } from '../Constants/urls';
import { useContext, useState } from 'react';
import { MessagesContext } from '../Contexts/Messages';
import { LoaderContext } from '../Contexts/Loader';

const useServerPost = url => {

    const [response, setResponse] = useState(null);

    const { messageError, messageSuccess } = useContext(MessagesContext);

    const { setShow } = useContext(LoaderContext);

    const doAction = data => {

        axios.post(`${SERVER_URL}${url}`, data)
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
            }).finally(_ => {
                setShow(false);
            });

    }


    return { doAction, serverResponse: response };

}

export default useServerPost;