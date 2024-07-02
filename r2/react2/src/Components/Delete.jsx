import { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';

export default function Delete() {

const { setRemove, remove, setDestroy } = useContext(DataContext);


    const handleDelete = _ => {
        setDestroy({...remove});
        setRemove(null);
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete color</h5>
                        <button type="button" className="btn-close" onClick={_ => setRemove(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            Are you sure you want to delete this color and shapes?
                        </div>
                        <div className="color-line">

                            <div className="content">
                                <div className="colors">
                                    {
                                        Array(remove.range).fill().map((_, i) => remove.shape !== 'triangle'
                                            ?
                                            <div key={i} style={{ backgroundColor: remove.color }} className={'small ' + remove.shape}></div>
                                            :
                                            <div key={i} style={{ borderBottomColor: remove.color }} className={'small ' + remove.shape}></div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="red" onClick={handleDelete}>Delete</button>
                        <button type="button" className="blue" onClick={_ => setRemove(null)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}