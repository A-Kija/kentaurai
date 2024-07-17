import { useEffect, useState, useContext, useCallback } from 'react';
import useServerGet from '../../Hooks/useServerGet';
import useServerDelete from '../../Hooks/useServerDelete';
import { ModalsContext } from '../../Contexts/Modals';
import * as l from '../../Constants/urls';


export default function UsersList() {

    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.SERVER_GET_USERS);
    const { doAction: doDelete, serverResponse: serverDeleteResponse } = useServerDelete(l.SERVER_DELETE_USER);
    const { setDeleteModal } = useContext(ModalsContext);
    const [users, setUsers] = useState(null);

    const hideUser = user => {
        setUsers(u => u.map(u => u.id === user.id ? { ...u, hidden: true } : u));
    }

    const showUser = useCallback(_ => {
        setUsers(u => u.map(u => {
            delete u.hidden;
            return u;
        }));
    }, []);

    const removeHidden = useCallback(_ => {
        setUsers(u => u.filter(u => !u.hidden));
    }, []);

    useEffect(_ => {
        doGet();
    }, [doGet]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        setUsers(serverGetResponse.serverData.users ?? null);
    }, [serverGetResponse]);

    useEffect(_ => {
        if (null === serverDeleteResponse) {
            return;
        }
        if (serverDeleteResponse.type === 'error') {
            showUser();
        } else {
            removeHidden();
        }
    }, [serverDeleteResponse, showUser, removeHidden]);


    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Vartotojų sąrašas</h1>
                    </header>
                </div>
            </section>
            <section>
                {
                    users === null && <h3>Palaukite, siunčiamas vartotojų sąrašas...</h3>
                }
                {
                    users !== null && <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Vardas</th>
                                    <th>Elektroninis paštas</th>
                                    <th>Rolė</th>
                                    <th>Veiksmai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(u =>
                                        u.hidden
                                            ? null
                                            : <tr key={u.id}>
                                                <td>{u.name}</td>
                                                <td>{u.email}</td>
                                                <td>{u.role}</td>
                                                <td className="two">
                                                    <ul className="actions special">
                                                        <li><a href={l.USER_EDIT + '/' + u.id} className="button small">redaguoti</a></li>
                                                        <li><input onClick={_ => setDeleteModal({
                                                            data: u,
                                                            doDelete,
                                                            hideData: hideUser,
                                                        })}
                                                            type="button"
                                                            value="ištrinti"
                                                            className="small" />
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>Viso vartototojų: {users.filter(u => !u.hidden).length}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                }
            </section>
        </>
    );
}