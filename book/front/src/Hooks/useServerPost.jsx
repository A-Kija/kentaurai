import axios from 'axios';
import { SERVER_URL } from '../Constants/urls';
import { useState } from 'react';

const useServerPost = url => {

    const [response, setResponse] = useState(null)

    const doAction = data => {

        axios.post(`${SERVER_URL}${url}`, data)
            .then(res => {

                setResponse({
                    type: 'success',
                    data: res.data
                });
            })
            .catch(error => {
                console.log(error);
                setResponse({
                    type: 'error',
                    data: error
                });
            });

    }


    return { doAction, response };

}

export default useServerPost;