import { useContext } from 'react';
import { RouterContext } from '../../Contexts/Router';

export default function UserEdit() {

    const { params } = useContext(RouterContext);

    console.log(params);

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

            </section>

        </>
    );

}