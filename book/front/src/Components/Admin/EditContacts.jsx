import { useState, useEffect, useContext } from 'react';
import Input from '../Forms/Input';
import Textarea from '../Forms/Textarea';
import useServerGet from '../../Hooks/useServerGet';
import useServerPut from '../../Hooks/useServerPut';
import * as l from '../../Constants/urls';
import { LoaderContext } from '../../Contexts/Loader';

export default function EditContacts() {

    const [contacts, setContacts] = useState(null);

    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.SERVER_EDIT_CONTACTS);
    const { doAction: doPut, serverResponse: serverPutResponse } = useServerPut(l.SERVER_UPDATE_CONTACTS);
    const { setShow } = useContext(LoaderContext);
    
    useEffect(_ => {
        doGet();
    }, [doGet]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        setContacts(JSON.parse(serverGetResponse.serverData.contacts.value));
    }, [serverGetResponse]);
    
    useEffect(_ => {
        if (null === serverPutResponse) {
            return;
        }
        if ('success' === serverPutResponse.type) {
            window.location.hash = l.SITE_DASHBORD;
        }
    }, [serverPutResponse]);
    
    
    
    const handleForm = e => {
        setContacts(u => ({ ...u, [e.target.name]: e.target.value }));
    }

    const submit = _ => {
        setShow(true);
        doPut(contacts);
    }

    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Kontaktų redagavimas</h1>
                    </header>
                </div>
            </section>
            <section>
                {
                    null === contacts && <h3>Palaukite, siunčiami duomenys...</h3>
                }
                {
                    null !== contacts &&
                    <div className="row aln-center">
                        <div className="col-6 col-8-large col-10-medium col-12-small">
                            <form>
                                <div className="row gtr-uniform">
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={contacts.title} type="text" name="title" label="Kontaktų bloko pavadinimas" />
                                    </div>
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={contacts.email} type="text" name="email" autoComplete="off" label="Elektroninis paštas" />
                                    </div>
                                    <div className="col-12">
                                        <Textarea onChange={handleForm} value={contacts.about} type="text" name="about" label="Aprašymas"/>
                                    </div>
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={contacts.phone} type="text" name="phone" autoComplete="off" label="Telefonas" />
                                    </div>
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={contacts.address} type="text" name="address" autoComplete="off" label="Adresas" />
                                    </div>


                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input onClick={submit} type="button" value="Išsaugoti" className="primary" /></li>
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