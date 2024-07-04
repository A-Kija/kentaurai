import Header from './Header';
import SideBar from './SideBar';

export default function Layout({children}) {

return (
			<div id="wrapper">

				{/* <!-- Main --> */}
					<div id="main">
						<div className="inner">

							{/* <!-- Header --> */}
                                <Header />

							{children}
								

						</div>
					</div>

				{/* <!-- Sidebar --> */}
					<SideBar />

			</div>
);
}