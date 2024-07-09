import * as l from '../../Constants/urls';

export default function Login() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header id="header"><h2>Prisijungti</h2></header>
                    <section>
                        <header className="main">
                            <div className="row aln-center">
                                <div className="col-6 col-8-large col-10-medium col-12-small">
                                    <form>
                                        <div className="row gtr-uniform">
                                            <div className="col-6 col-12-xsmall">
                                                <input type="email" name="email" placeholder="El. paštas" autoComplete="email" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input type="password" name="psw" placeholder="Slaptažodis" autoComplete="password" />
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input type="button" value="Prisijungti" className="primary" /></li>
                                                </ul>
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><a href={'/' + l.SITE_HOME}>Grįžti į pradinį</a></li>
                                                    <li><a href={l.SITE_REGISTER}>Registruotis</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </header>
                    </section>
                </div>
            </div>
        </div>
    );
}