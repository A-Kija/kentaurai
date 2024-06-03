import Vat from './Vat';

export default function Price2({ productPrice, discount = 0, vatColor }) {

    if (discount === 0) {
        return (
            <>
                <div>
                    <span>Price: </span>
                    <b>{productPrice} Eur</b>
                </div>
                <Vat productPrice={productPrice} color={vatColor} show={'small'} />
            </>
        );
    } else {
        return (
            <>
                <div>
                    <span>Price: </span>
                    <b style={{ textDecoration: 'line-through' }}>{productPrice} Eur</b>
                    <b>{productPrice - discount} Eur</b>
                </div>
                <Vat productPrice={productPrice - discount} color={vatColor} show={'small'} />
            </>
        );
    }

}