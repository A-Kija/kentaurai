export default function Register() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header id="header"></header>
                    <section>
                        <header className="main">
                            <h3>Registruotis</h3>

                            <form>
                                <div className="row gtr-uniform">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="demo-name" id="demo-name" value="" placeholder="Vardas" />
                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input type="email" name="demo-email" id="demo-email" value="" placeholder="El. paštas" />
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input type="button" value="Registruotis" className="primary" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                            <a href="/#">Grįžti į pradinį</a>
                        </header>
                    </section>
                </div>
            </div>
        </div>
    );
}