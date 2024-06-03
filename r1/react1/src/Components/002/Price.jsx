import Vat from './Vat';

export default function Price({ productPrice, discount = 0, vatColor }) {

    return (
        <>
        <div><span>Price: </span>
            {
                discount === 0
                    ?
                    <b>{productPrice} Eur</b> 
                    :
                    <>
                        <b style={{ textDecoration: 'line-through' }}>{productPrice} Eur</b> 
                        <b>{productPrice - discount} Eur</b>
                    </>
            }
        </div>
        <Vat productPrice={productPrice - discount} color={vatColor} show={'small'} />
        </>
    );

}