import { useEffect, useState } from 'react';
import useServerGet from '../../Hooks/useServerGet';
import * as l from '../../Constants/urls';



export default function Home() {



    const [types, setTypes] = useState(null);
    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.GET_TYPES);


    useEffect(_ => {
        doGet();
    }, [doGet]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        if (serverGetResponse.type === 'success') {
            setTypes(serverGetResponse.serverData.types);
        }
    }, [serverGetResponse]);



    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Hi, I’m Editorial<br />
                            by HTML5 UP</h1>
                        <p>A free and fully responsive site template</p>
                    </header>
                    <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                    <ul className="actions">
                        <li><a href="#" className="button big">Learn More</a></li>
                    </ul>
                </div>
                <span className="image object">
                    <img src="images/pic10.jpg" alt="" />
                </span>
            </section>


            <section>
                <header className="major">
                    <h2>Erat lacinia</h2>
                </header>
                <div className="features">
                {
                    types === null ? <p>Palaukite kraunasi...</p> : types.map(t => (

                        
                            <article key={t.id}>
                                <span className={'icon ' +  t.icon}></span>
                                <div className="content">
                                    <h3>{t.title}</h3>
                                    <p>{t.description}</p>
                                </div>
                            </article>
                        
                    ))
                }
                </div>
            </section>


            <section>
                <header className="major">
                    <h2>Ipsum sed dolor</h2>
                </header>
                <div className="posts">
                    <article>
                        <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                        <h3>Interdum aenean</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
                        <h3>Nulla amet dolore</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
                        <h3>Tempus ullamcorper</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
                        <h3>Sed etiam facilis</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
                        <h3>Feugiat lorem aenean</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
                        <h3>Amet varius aliquam</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    );
}