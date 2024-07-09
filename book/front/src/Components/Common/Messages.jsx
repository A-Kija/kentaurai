import { useContext } from 'react';
import { MessagesContext } from '../../Contexts/Messages';

export default function Messages() {

    const { msg, remMessage } = useContext(MessagesContext);

    if (msg.length === 0) {
        return null;
    }

    return (
        <div className="toast-container">
            {
                msg.map(m =>
                    <div key={m.id} className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            {m.type === 'error' && <span className="icon type solid fa-exclamation-triangle"></span>}
                            {m.type === 'info' && <span className="icon type solid fa-exclamation"></span>}
                            {m.type === 'success' && <span className="icon type solid fa-check"></span>}
                            <strong className="me-auto">{m.title}</strong>
                            <button type="button" className="simple" aria-label="Close" onClick={_ => remMessage(m.id)}>
                                <span className="icon solid fa-times"></span>
                            </button>
                        </div>
                        <div>
                            {m.text}
                        </div>
                    </div>)
            }
        </div>
    );
}