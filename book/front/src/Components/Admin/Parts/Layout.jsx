import Header from './Header';
import SideBar from './SideBar';

export default function Layout({ children }) {

	return (
		<div id="wrapper">
			<div id="main">
				<div className="inner">
					<Header />
					{children}
				</div>
			</div>
			<SideBar />
		</div>
	);
}