import { useContext } from 'react';
import { ModalsContext } from '../../Contexts/Modals';

export default function DeleteModal() {

    const { deleteModal } = useContext(ModalsContext);

    if (deleteModal === null) {
        return null;
    }

    return (
        <div className="delete-modal-container">
            <div className="modal">
                <button type="button" className="simple" aria-label="Close" >
                    <span className="icon solid fa-times"></span>
                </button>

                <div className="message-text">
                    <p className="align-center">Ar tikrai norite ištrinti Joną ?</p>
                </div>

                <ul className="actions special">
                    <li><input type="button" value="trinti" className="small" /></li>
                    <li><input type="button" value="atšaukti" className="small" /></li>
                </ul>
            </div>
        </div>
    )
}