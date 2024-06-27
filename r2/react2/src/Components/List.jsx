export default function List({ colors, setRemove, setEdit }) {


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
                        <div className="buttons">
                            <button type="button" className="green" onClick={_ => setEdit(c)}>Edit</button>
                            <button type="button" className="red" onClick={_ => setRemove(c)}>Delete</button>
                        </div>
                    </div>
                </li>)
            }

        </ul>
    );
}