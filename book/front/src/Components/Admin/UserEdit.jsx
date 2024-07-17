import { useContext, useEffect, useState } from 'react';
import { RouterContext } from '../../Contexts/Router';
import useServerGet from '../../Hooks/useServerGet';
import * as l from '../../Constants/urls';
import Input from '../Forms/Input';
import Select from '../Forms/Select';

export default function UserEdit() {

    const { params } = useContext(RouterContext);
    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.SERVER_EDIT_USER);
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

    const handleForm = e => {
        setUser(u => ({ ...u, [e.target.name]: e.target.value }));
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
                    null === user && <h3>Užkraunama...</h3>
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
                                        <Input onChange={handleForm} value={user.email} type="text" name="email" />
                                    </div>
                                    <div className="col-12">
                                        <Select onChange={handleForm} value={user.role} name="role" />
                                    </div>

                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><a href={'/' + l.USERS_LIST}>Visi vartotojai</a></li>

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