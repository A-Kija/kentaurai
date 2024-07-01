import { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';

export default function List() {

    const { colors } = useContext(DataContext);

    if (null === colors) {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Loading...</li>
            </ul>
        );
    }

    return (
        <ul className="list-group list-group-flush">
            {
                colors.map(c => <li key={c.id} className="list-group-item">
                    <div className="color-line">
                        <div className="content">
                            <div className="title">{c.title ?? 'no title'}</div>
                            <div className="colors">
                                {
                                    Array(c.range).fill().map((_, i) => c.shape !== 'triangle'
                                        ?
                                        <div key={i} style={{ backgroundColor: c.color }} className={c.shape}></div>
                                        :
                                        <div key={i} style={{ borderBottomColor: c.color }} className={c.shape}></div>
                                    )
                                }
                            </div>
                        </div>
                        {
                            c.id !== 0 &&
                            <div className="buttons">
                                <button type="button" className="green" >Edit</button>
                                <button type="button" className="red" >Delete</button>
                            </div>
                        }
                    </div>
                </li>)
            }

        </ul>
    );
}