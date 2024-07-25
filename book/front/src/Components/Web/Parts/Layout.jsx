import Header from './Header';
import SideBar from './SideBar';
import { useState, useEffect } from 'react';
import * as l from '../../../Constants/urls';
import useServerGet from '../../../Hooks/useServerGet';

export default function Layout({ children }) {

	const [webContent, setWebContent] = useState(null);
	const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.GET_WEB_CONTENT);

	
	useEffect(_ => {
        doGet();
    }, [doGet]);

	useEffect(_ => {
		if (null === serverGetResponse) {
			return;
		}
		if (serverGetResponse.type === 'success') {
			setWebContent(serverGetResponse.serverData.content.map(c => ({...c, value: JSON.parse(c.value)})));
		}
	}, [serverGetResponse]);

	return (
		<div id="wrapper">
			<div id="main">
				<div className="inner">
					<Header webContent={webContent} />
					{children}
				</div>
			</div>
			<SideBar webContent={webContent} />
		</div>
	);
}