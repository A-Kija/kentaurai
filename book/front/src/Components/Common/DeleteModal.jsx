import { useContext } from 'react';
import { ModalsContext } from '../../Contexts/Modals';

export default function DeleteModal() {

    const { deleteModal, setDeleteModal } = useContext(ModalsContext);

    const submit = _ => {
        deleteModal.doDelete(deleteModal.data);
        deleteModal.hideData(deleteModal.data);
        setDeleteModal(null);
    }

    if (deleteModal === null) {
        return null;
    }

    return (
        <div className="delete-modal-container">
            <div className="modal">
                <button onClick={_ => setDeleteModal(null)} type="button" className="simple" aria-label="Close" >
                    <span className="icon solid fa-times"></span>
                </button>

                <div className="message-text">
                    <p className="align-center">Ar tikrai norite ištrinti {deleteModal.data.name} ?</p>
                </div>

                <ul className="actions special">
                    <li><input onClick={submit} type="button" value="trinti" className="small" /></li>
                    <li><input onClick={_ => setDeleteModal(null)} type="button" value="atšaukti" className="small" /></li>
                </ul>
            </div>
        </div>
    )
}