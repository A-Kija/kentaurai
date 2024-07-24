import * as l from '../../../Constants/urls';
import Logout from '../../Common/Logout';
import Gate from '../../Common/Gate';

export default function Header() {

    return (
        <header id="header">
            <a href="index.html" className="logo">Administravimas</a>
            <ul className="icons">  
                <Gate status="logged">
                    <li><Logout /></li>
                </Gate>
            </ul>
        </header>
    );
}