import useServerGet from '../../Hooks/useServerGet';
import * as l from '../../Constants/urls';
import { useState } from 'react';

export default function UsersList() {

    const { doAction, serverResponse } = useServerGet(l.SERVER_GET_USERS);

    const [users, setUsers] = useState(null);


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
                    users === null && <h2>Palaukite, siunčiame vartotojų sąrašą</h2>
                }
                {
                    users !== null && <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Vardas</th>
                                    <th>Elektroninis paštas</th>
                                    <th>Veiksmai</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Item1</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td className="two">
                                        <ul className="actions special">
                                            <li><input type="button" value="redaguoti" className="small" /></li>
                                            <li><input type="button" value="ištrinti" className="small" /></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>Viso vartototojų: 5</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                }
            </section>
        </>
    );
}