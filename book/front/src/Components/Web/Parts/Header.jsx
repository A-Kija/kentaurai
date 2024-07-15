import * as l from '../../../Constants/urls';

export default function Header() {

    return (
        <header id="header">
        <a href="index.html" className="logo"><strong>Raudonoji</strong> Knyga</a>
        <ul className="icons">
            <li><a href={l.SITE_LOGIN}><span className="label">Prisijungti</span></a></li>
            <li><a href={l.SITE_REGISTER}><span className="label">Registruotis</span></a></li>
            
            <li><a href={l.SITE_DASHBORD}><span className="label">Laikinas ADMIN </span></a></li>
        </ul>
    </header>
    );
}