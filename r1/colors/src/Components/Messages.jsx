export default function Messages({ msg }) {



    if (msg.length === 0) {
        return null;
    }

    return (

        <div className="toast-container">
            {
                msg.map(m =>
                    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <div className="toast-type error"></div>
                            <strong className="me-auto">Colors</strong>
                            <button type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            See? Just like this.
                        </div>
                    </div>)
            }

        </div>
    );
}