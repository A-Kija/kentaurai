import { useRef, useState } from 'react';
import Footer from './Footer';
import Menu from './Menu';

export default function SideBar({ webContent }) {

    const sidebar = useRef();

    const [showSidebar, setShowSidebar] = useState(false);

    const contacts = webContent?.find(c => c.name === 'contacts')?.value;

    const toogleSideBar = _ => {
        setShowSidebar(b => !b);
    }

    return (
        <div id="sidebar" ref={sidebar} className={showSidebar ? null : 'inactive'}>
            <div className="inner">

                {/* <!-- Search --> */}
                <section id="search" className="alt">
                    <form method="post" action="#">
                        <input type="text" name="query" id="query" placeholder="Search" />
                    </form>
                </section>

                {/* <!-- Menu --> */}
                <Menu />

                {/* <!-- Section --> */}
                <section>
                    <header className="major">
                        <h2>Ante interdum</h2>
                    </header>
                    <div className="mini-posts">
                        <article>
                            <a href="/#" className="image"><img src="images/pic07.jpg" alt="" /></a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                        <article>
                            <a href="/#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                        <article>
                            <a href="/#" className="image"><img src="images/pic09.jpg" alt="" /></a>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                    </div>
                    <ul className="actions">
                        <li><a href="/#" className="button">More</a></li>
                    </ul>
                </section>

                {
                contacts &&
                    <section>
                        <header className="major">
                            <h2>{contacts.title}</h2>
                        </header>
                        <p>{contacts.about}</p>
                        <ul className="contact">
                            <li className="icon solid fa-envelope"><a href="/#">{contacts.email}</a></li>
                            <li className="icon solid fa-phone">{contacts.phone}</li>
                            <li className="icon solid fa-home">{contacts.address}</li>
                        </ul>
                    </section>
                }

                <Footer />

            </div>
            <span className="toggle" style={{ cursor: 'pointer' }} onClick={toogleSideBar}>Toggle</span>
        </div>
    );
}