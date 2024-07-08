import { useEffect, useState } from 'react';
import useServerPost from '../../Hooks/useServerPost';
import { REDIRECT_AFTER_REGISTER } from '../../Constants/urls';

export default function Register() {

    const defaultValues = { name: '', email: '', psw: '', psw2: '' }

    const { doAction, response } = useServerPost('register');

    const [form, setForm] = useState(defaultValues);

    useEffect(_ => {
        if (null === response) {
            return;
        }

        window.location.hash = REDIRECT_AFTER_REGISTER;

    }, [response]);

    const handleForm = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    const handleSubmit = _ => {
        // TODO validations
        doAction({
            name: form.name,
            email: form.email,
            password: form.psw
        });
    }

    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header id="header"><h2>Registruotis</h2></header>
                    <section>
                        <header className="main">
                            <div className="row aln-center">
                                <div className="col-6 col-8-large col-10-medium col-12-small">
                                    <form>
                                        <div className="row gtr-uniform">
                                            <div className="col-6 col-12-xsmall">
                                                <input onChange={handleForm} value={form.name} type="text" name="name" placeholder="Vardas" autoComplete="username" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input onChange={handleForm} value={form.email} type="email" name="email" placeholder="El. paštas" autoComplete="email" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input onChange={handleForm} value={form.psw} type="password" name="psw" placeholder="Slaptažodis" autoComplete="new-password" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input onChange={handleForm} value={form.psw2} type="password" name="psw2" placeholder="Pakartoti" autoComplete="new-password" />
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input onClick={handleSubmit} type="button" value="Registruotis" className="primary" /></li>
                                                </ul>
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><a href="/#">Grįžti į pradinį</a></li>
                                                    <li><a href="/#login">Prisijungti</a></li>
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