import './fruit.scss';

export default function Fruit({ fruit }) {

    return (
        <li className="f-li">
            <div className="fruit-sq" style={{ backgroundColor: fruit.color }}>
                <h3>{fruit.id}</h3>
                <h4>{fruit.name}</h4>
            </div>
        </li>
    );

}