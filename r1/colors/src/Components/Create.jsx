import { useState } from 'react';
import { rbc, rbu } from '../Styles/svg';

export default function Create({create, setStore, setCreate}) {


    const [shape, setShape] = useState(create.shape);
    const [color, setColor] = useState(create.color);
    const [range, setRange] = useState(create.range);

    const handleShape = e => {
        setShape(e.target.id);
    }

    const handleCreate = _ => {
        setStore({
            shape,
            color,
            range
        });
        setCreate(null);
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add new color</h5>
                        <button type="button" className="btn-close" onClick={_ => setCreate(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="m-2">
                            <label className="form-label">Choose your color</label>
                            <input type="color" className="form-control form-control-color" onChange={e => setColor(e.target.value)} value={color} title="Choose your color" />
                        </div>
                        <div className="m-2">
                            <label className="form-label flex-space"><span>How many?</span> <b>{range}</b></label>
                            <input type="range" className="form-range" min={1} max={10} step={1} value={range} onChange={(e => setRange(+e.target.value))} />
                        </div>
                        <div className="m-2">
                            <label className="form-label">Shape</label>
                            <div className="cb-bin">
                                <div className="cb"><input type="checkbox" id="square" checked={shape === 'square'} onChange={handleShape} /><label htmlFor="square">{shape === 'square' ? rbc : rbu}</label><span>Square</span></div>
                                <div className="cb"><input type="checkbox" id="circle" checked={shape === 'circle'} onChange={handleShape} /><label htmlFor="circle">{shape === 'circle' ? rbc : rbu}</label><span>Circle</span></div>
                                <div className="cb"><input type="checkbox" id="rounded" checked={shape === 'rounded'} onChange={handleShape} /><label htmlFor="rounded">{shape === 'rounded' ? rbc : rbu}</label><span>Rounded</span></div>
                                <div className="cb"><input type="checkbox" id="triangle" checked={shape === 'triangle'} onChange={handleShape} /><label htmlFor="triangle">{shape === 'triangle' ? rbc : rbu}</label><span>Triangle</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="green" onClick={handleCreate}>Add</button>
                        <button type="button" className="red" onClick={_ => setCreate(null)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}