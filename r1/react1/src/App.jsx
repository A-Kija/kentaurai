import './App.css';
import './buttons.scss';
import { useState, useRef, useEffect } from 'react';
function App() {

    const cbc = <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m22 11a1 1 0 0 0 -1 1v6a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3-3v-12a3 3 0 0 1 3-3h8a1 1 0 0 0 0-2h-8a5 5 0 0 0 -5 5v12a5 5 0 0 0 5 5h12a5 5 0 0 0 5-5v-6a1 1 0 0 0 -1-1z" /><path d="m8.7 8.5a1 1 0 1 0 -1.4 1.42l3.86 3.79a1 1 0 0 0 1.4 0l8.14-8a1 1 0 0 0 -1.4-1.42l-7.44 7.31z" /></g></svg>
    const cbu = <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m22 11a1 1 0 0 0 -1 1v6a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3-3v-12a3 3 0 0 1 3-3h8a1 1 0 0 0 0-2h-8a5 5 0 0 0 -5 5v12a5 5 0 0 0 5 5h12a5 5 0 0 0 5-5v-6a1 1 0 0 0 -1-1z" /></g></svg>

    const rbc = <svg height="97.75" viewBox="0 0 97.75 97.75" width="97.75" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m48.875 29.791c-10.022 0-18.176 8.561-18.176 19.084s8.154 19.084 18.176 19.084c10.021 0 18.176-8.561 18.176-19.084s-8.155-19.084-18.176-19.084z" /><path d="m48.875 0c-26.993 0-48.875 21.882-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.882 48.875-48.875-21.882-48.875-48.875-48.875zm0 84.086c-18.915 0-34.303-15.795-34.303-35.211s15.388-35.211 34.303-35.211c18.914 0 34.303 15.795 34.303 35.211s-15.389 35.211-34.303 35.211z" /></g></g></svg>
    const rbu = <svg height="97.75" viewBox="0 0 97.75 97.75" width="97.75" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m48.875 0c-26.993 0-48.875 21.882-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.882 48.875-48.875-21.882-48.875-48.875-48.875zm0 84.086c-18.915 0-34.303-15.795-34.303-35.211s15.388-35.211 34.303-35.211c18.914 0 34.303 15.795 34.303 35.211s-15.389 35.211-34.303 35.211z" /></g></g></svg>

    const rem = <svg xmlns="http://www.w3.org/2000/svg" width="469.404px" height="469.404px" viewBox="0 0 469.404 469.404">
        <g>
            <path d="M310.4,235.083L459.88,85.527c12.545-12.546,12.545-32.972,0-45.671L429.433,9.409c-12.547-12.546-32.971-12.546-45.67,0
            L234.282,158.967L85.642,10.327c-12.546-12.546-32.972-12.546-45.67,0L9.524,40.774c-12.546,12.546-12.546,32.972,0,45.671
            l148.64,148.639L9.678,383.495c-12.546,12.546-12.546,32.971,0,45.67l30.447,30.447c12.546,12.546,32.972,12.546,45.67,0
            l148.487-148.41l148.792,148.793c12.547,12.546,32.973,12.546,45.67,0l30.447-30.447c12.547-12.546,12.547-32.972,0-45.671
            L310.4,235.083z"/>
        </g>
    </svg>


    const text2 = useRef();

    const [text1, setText1] = useState('');
    const [error, setError] = useState(false);
    const [h1, setH1] = useState('CONTROLLED INPUTS');
    const [text3, setText3] = useState('');
    const [texts, setTexts] = useState({ textA: '', textB: '', textC: '' });
    const [color, setColor] = useState('#282c34');
    const [range, setRange] = useState(30);
    const [select, setSelect] = useState(3);

    const [cb, setCb] = useState({
        A: false,
        B: true,
        C: false,
        D: true
    });

    const [radio, setRadio] = useState('rC');

    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('No image');

    const animals = [
        { id: 1, name: 'bebras' },
        { id: 2, name: 'lape' },
        { id: 3, name: 'vilkas' },
        { id: 4, name: 'zuikis' },
        { id: 5, name: 'barsukas' }
    ];

    useEffect(_ => {
        text2.current.focus();
    }, []);

    const handleCb = e => {
        setCb(boxes => ({ ...boxes, [e.target.id]: !boxes[e.target.id] }));
    }

    const handleRadio = e => {
        setRadio(r => r === e.target.id ? '' : e.target.id);
    }


    const handleText1 = e => {
        if (e.target.value.length > 5) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        setText1(e.target.value);
    }

    const handleH1 = e => {
        setText3(e.target.value);
    }

    // niekam tikęs būdas skaiyti inputus
    const readRed = _ => {
        // const el = document.querySelector('#text2'); niekada!
        // el yra text2.current
        console.log('text2:', text2.current.value);
    }

    const handleTexts = e => {
        setTexts(t => ({ ...t, [e.target.name]: e.target.value }));
    }

    const imageInput = useRef();

    const imageReader = img => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = _ => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleImage = e => {
        imageReader(e.target.files[0])
            .then(res => {
                setImage(res);
                setImageName(imageInput.current.value.replace('C:\\fakepath\\', ''));
            })
            .catch(_ => {
                setImage(null);
                setImageName('No image');
            })
    }

    const clearImage = _ => {
        imageInput.current.value = null;
        setImage(null);
        setImageName('No image');
    }


    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: color }}>
                <h1 style={{ fontSize: range + 'px' }}>{h1}</h1>



                <fieldset>
                    <legend>FILE</legend>
                    <input type="file" id="F" ref={imageInput} onChange={handleImage} />
                    <label htmlFor="F">ADD file: {imageName}</label>
                    <div className="up-img">
                        {
                            image
                                ?
                                <>
                                    <img src={image} alt="uploaded" />
                                    <span className="cb-svg remove" onClick={clearImage}>{rem}</span>
                                </>
                                :
                                null
                        }
                    </div>
                </fieldset>

                <fieldset>
                    <legend>CHECKBOX</legend>
                    <div className="cb"><input type="checkbox" id="A" checked={cb.A} onChange={handleCb} /><span className="cb">A</span><label className="cb-svg" htmlFor="A">{cb.A ? cbc : cbu}</label></div>
                    <div className="cb"><input type="checkbox" id="B" checked={cb.B} onChange={handleCb} /><span className="cb">B</span><label className="cb-svg" htmlFor="B">{cb.B ? cbc : cbu}</label></div>
                    <div className="cb"><input type="checkbox" id="C" checked={cb.C} onChange={handleCb} /><span className="cb">C</span><label className="cb-svg" htmlFor="C">{cb.C ? cbc : cbu}</label></div>
                    <div className="cb"><input type="checkbox" id="D" checked={cb.D} onChange={handleCb} /><span className="cb">D</span><label className="cb-svg" htmlFor="D">{cb.D ? cbc : cbu}</label></div>
                </fieldset>

                <fieldset>
                    <legend>RADIO BUTTONS</legend>
                    <div className="cb"><input type="checkbox" id="rA" checked={radio === 'rA'} onChange={handleRadio} /><span className="cb">A</span><label className="cb-svg" htmlFor="rA">{radio === 'rA' ? rbc : rbu}</label></div>
                    <div className="cb"><input type="checkbox" id="rB" checked={radio === 'rB'} onChange={handleRadio} /><span className="cb">B</span><label className="cb-svg" htmlFor="rB">{radio === 'rB' ? rbc : rbu}</label></div>
                    <div className="cb"><input type="checkbox" id="rC" checked={radio === 'rC'} onChange={handleRadio} /><span className="cb">C</span><label className="cb-svg" htmlFor="rC">{radio === 'rC' ? rbc : rbu}</label></div>
                    <div className="cb"><input type="checkbox" id="rD" checked={radio === 'rD'} onChange={handleRadio} /><span className="cb">D</span><label className="cb-svg" htmlFor="rD">{radio === 'rD' ? rbc : rbu}</label></div>
                </fieldset>


                <fieldset>
                    <legend>TEXT</legend>
                    <input type="text" value={text1} onChange={handleText1} style={{ backgroundColor: error ? 'crimson' : null }} />
                    <input type="text" ref={text2} />
                    <input type="text" value={text3} onChange={handleH1} />
                    <button type="button" className="blue" onClick={_ => console.log('text1:', text1)}>read 1</button>
                    <button type="button" className="red" onClick={readRed}>read 2</button>
                    <button type="button" className="yellow" onClick={_ => setH1(text3)}>H1</button>
                </fieldset>

                <fieldset>
                    <legend>MORE TEXT</legend>
                    <input type="text" value={texts.textA} name="textA" onChange={handleTexts} />
                    <input type="text" value={texts.textB} name="textB" onChange={handleTexts} />
                    <input type="text" value={texts.textC} name="textC" onChange={handleTexts} />
                    <button type="button" className="blue" onClick={_ => console.log('texts:', texts)}>read all texts</button>
                </fieldset>

                <fieldset>
                    <legend>COLOR & RANGE</legend>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                    <input type="range" min={20} max={60} value={range} onChange={e => setRange(+e.target.value)} />
                </fieldset>

                <fieldset>
                    <legend>SELECT</legend>

                    <select value={select} onChange={e => setSelect(+e.target.value)}>
                        {
                            animals.map(a => <option key={a.id} value={a.id}>{a.name}</option>)
                        }
                    </select>
                    <button type="button" className="blue" onClick={_ => console.log('animal:', select, animals.find(a => a.id === select).name)}>what?</button>

                </fieldset>

            </header>


        </div>
    );
}

export default App;