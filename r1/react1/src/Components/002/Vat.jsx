import './vat.css';
export default function Vat({ color, productPrice, show } ) {

    // const { color, productPrice } = props;

    console.log(productPrice, color, show);

    const vat = productPrice / 100 * 21;

    return (
        <div className={show}><span>Vat:</span> <b style={{ color }}>{vat} Eur</b></div>
    );

}