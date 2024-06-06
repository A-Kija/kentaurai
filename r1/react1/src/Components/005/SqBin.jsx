import Sq from "./Sq";

export default function SqBin({ sq, rotateSq }) {

    return (
        <div className="sq-bin">
            {
                sq.map(s => <Sq key={s.id} s={s} rotateSq={rotateSq} />)
            }
        </div>
    );
}