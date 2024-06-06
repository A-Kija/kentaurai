export default function Buttons({setCounter}) {

    return (
        <div className="buttons">
            <button type="button" className="green" onClick={_ => setCounter(c => c + 1)}>+ 1</button>
            <button type="button" className="red" onClick={_ => setCounter(c => c - 1)}>- 1</button>
        </div>
    );
}