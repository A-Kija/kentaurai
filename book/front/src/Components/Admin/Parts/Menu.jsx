import * as l from '../../../Constants/urls';

export default function Menu() {

    return (
        <nav id="menu">
            <header className="major">
                <h2>Menu</h2>
            </header>
            <ul>
                <li><a href={'/' + l.SITE_DASHBORD}>Lenta</a></li>
                <li><a href={'/' + l.USERS_LIST}>Vartotojai</a></li>
                <li><a href={'/' + l.EDIT_CONTACTS}>Kontaktų redagavimas</a></li>
                <li><a href={'/' + l.POSTS_LIST}>Straipsniai</a></li>
                <li><a href={'/' + l.POST_ADD}>Naujas Straipsnis</a></li>
            </ul>
        </nav>
    );
}
