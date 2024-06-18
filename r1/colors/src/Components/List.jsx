export default function List({ colors }) {


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
                            <div>{c.id}</div>
                            <div className="colors">
                                {
                                    Array(c.range).fill().map(_ => c.shape !== 'triangle'
                                        ?
                                        <div style={{ backgroundColor: c.color }} className={c.shape}></div>
                                        :
                                        <div style={{ borderBottomColor: c.color }} className={c.shape}></div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="buttons">
                            <button type="button" className="green">Edit</button>
                            <button type="button" className="red">delete</button>
                        </div>
                    </div>
                </li>)
            }

        </ul>
    );
}