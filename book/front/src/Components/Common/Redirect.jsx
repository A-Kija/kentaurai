import { useEffect } from 'react';
import * as l from '../../Constants/urls';

export default function Redirect({to}) {

    useEffect(_ => {
        window.location.hash = l?.[to] ?? l.SITE_HOME
    }, [to]);

    return null;
}
