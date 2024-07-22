import { useState, useContext, useEffect } from 'react';
import * as l from '../../Constants/urls';
import Input from '../Forms/Input';
import useServerPost from '../../Hooks/useServerPost';
import { LoaderContext } from '../../Contexts/Loader';
import { AuthContext } from '../../Contexts/Auth';

export default function Login() {


    const defaultValues = { email: '', password: ''};

    const [form, setForm] = useState(defaultValues);

    const { doAction, serverResponse } = useServerPost(l.SERVER_LOGIN);

    const { setShow } = useContext(LoaderContext);

    const { addUser, removeUser } = useContext(AuthContext);

    const handleForm = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    useEffect(_ => {
        if (null === serverResponse) {
            return;
        }
        if (serverResponse.type === 'success') {
            addUser(serverResponse.serverData.user);
            window.location.href = l.SITE_HOME;
        } else {
            removeUser();
        }
    }, [serverResponse, addUser]);


    const submit = _ => {
        setShow(true);
        doAction(form);
    }

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
                                                <Input onChange={handleForm} value={form.email} type="email" name="email" placeholder="El. paštas" autoComplete="email" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <Input onChange={handleForm} value={form.password} type="password" name="password" placeholder="Slaptažodis" autoComplete="password" />
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input onClick={submit} type="button" value="Prisijungti" className="primary" /></li>
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