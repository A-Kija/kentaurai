import { useEffect, useState } from 'react';
import useServerPost from '../../Hooks/useServerPost';
import * as l from '../../Constants/urls';
import useRegister from '../../Validations/useRegister';

export default function Register() {


    const defaultValues = { name: '', email: '', psw: '', psw2: '' }

    const { errors, validate } = useRegister();

    const { doAction, response } = useServerPost(l.SERVER_REGISTER);

    const [form, setForm] = useState(defaultValues);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(_ => {
        if (null === response) {
            return;
        }
        setButtonDisabled(false);
        if (response.type === 'success') {
            window.location.hash = l.REDIRECT_AFTER_REGISTER;
        }



    }, [response]);

    const handleForm = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    const handleSubmit = _ => {
        // TODO validations

        if (!validate(form)) {
            return;
        }


        setButtonDisabled(true);
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
                                                <div className="error-text"><span className={errors.name ? 'show' : ''}>{errors.name ?? ''}</span></div>
                                                <input className={errors.name ? 'error' : ''} onChange={handleForm} value={form.name} type="text" name="name" placeholder="Vardas" autoComplete="username" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <div className="error-text"><span className={errors.email ? 'show' : ''}>{errors.email ?? ''}</span></div>
                                                <input className={errors.email ? 'error' : ''} onChange={handleForm} value={form.email} type="email" name="email" placeholder="El. paštas" autoComplete="email" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <div className="error-text"><span className={errors.psw ? 'show' : ''}>{errors.psw ?? ''}</span></div>
                                                <input className={errors.psw ? 'error' : ''} onChange={handleForm} value={form.psw} type="password" name="psw" placeholder="Slaptažodis" autoComplete="new-password" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <div className="error-text"><span className={errors.psw2 ? 'show' : ''}>{errors.psw2 ?? ''}</span></div>
                                                <input className={errors.psw2 ? 'error' : ''} onChange={handleForm} value={form.psw2} type="password" name="psw2" placeholder="Pakartoti" autoComplete="new-password" />
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input disabled={buttonDisabled} onClick={handleSubmit} type="button" value="Registruotis" className="primary" /></li>
                                                </ul>
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><a href={'/' + l.SITE_HOME}>Grįžti į pradinį</a></li>
                                                    <li><a href={l.SITE_LOGIN}>Prisijungti</a></li>
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