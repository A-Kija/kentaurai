import { useContext, useEffect, useState } from 'react';
import { RouterContext } from '../../Contexts/Router';
import useServerGet from '../../Hooks/useServerGet';
import useServerPut from '../../Hooks/useServerPut';
import * as l from '../../Constants/urls';
import roles from '../../Constants/roles';
import Input from '../Forms/Input';
import Select from '../Forms/Select';

export default function UserEdit() {

    const { params } = useContext(RouterContext);
    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.SERVER_EDIT_USER);
    const { doAction: doPut, serverResponse: serverPutResponse } = useServerPut(l.SERVER_UPDATE_USER);
    const [user, setUser] = useState(null);


    useEffect(_ => {
        doGet('/' + params[1]);
    }, [doGet]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        setUser(serverGetResponse.serverData.user ?? null);
    }, [serverGetResponse]);

    useEffect(_ => {
        if (null === serverPutResponse) {
            return;
        }
        if ('success' === serverPutResponse.type) {
            window.location.href = l.USERS_LIST;
        }
    }, [serverPutResponse]);

    const handleForm = e => {
        setUser(u => ({ ...u, [e.target.name]: e.target.value }));
     }

     const submit = _ => {
        //TODO: Validation
        doPut(user);
    }

    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Vartotojo Redagavimas</h1>
                    </header>
                </div>
            </section>
            <section>
                {
                    null === user && <h3>Palaukite, siunčiami vartotojo duomenys...</h3>
                }
                {
                    null !== user && <div className="row aln-center">
                        <div className="col-6 col-8-large col-10-medium col-12-small">
                            <form>
                                <div className="row gtr-uniform">
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={user.name} type="text" name="name" />
                                    </div>
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={user.email} type="text" name="email" autoComplete="off" />
                                    </div>
                                    <div className="col-12">
                                        <Select onChange={handleForm} value={user.role} name="role" options={roles} />
                                    </div>
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={user.password} type="password" name="password" placeholder="Pakeisti slaptažodį" autoComplete="new-password" />
                                    </div>

                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input onClick={submit} type="button" value="Išsaugoti" className="primary" /></li>
                                            <li><a className="button" href={'/' + l.USERS_LIST}>Visi vartotojai</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </section>

        </>
    );

}