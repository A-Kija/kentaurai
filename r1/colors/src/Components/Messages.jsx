export default function Messages({ msg, remMessage }) {

    if (msg.length === 0) {
        return null;
    }

    return (
        <div className="toast-container">
            {
                msg.map(m =>
                    <div key={m.id} className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <div className={'toast-type ' + m.type}></div>
                            <strong className="me-auto">{m.title}</strong>
                            <button type="button" className="btn-close" aria-label="Close" onClick={_ => remMessage(m.id)}></button>
                        </div>
                        <div className="toast-body">
                            {m.text}
                        </div>
                    </div>)
            }
        </div>
    );
}