import {useState} from 'react';
import IBasket from './Models/IBasket.interface';

const Basket = () => {
    const [Basket, setBasket] = useState<IBasket>({
        open: false,
        products: [
            'Product 1',
            'Product 2',
            'Product 3',
            'Product 4',
            'Product 5',
        ]
    })

    return (
        <>
            <div className='menu-buttons__btn menu-buttons__basket'>
                <i className='fa fa-shopping-basket' aria-hidden='true'></i>

                <span className='menu-buttons__shopping-count'>{Object.keys(Basket.products).length}</span>
            </div>

            {Basket.open && (
                <div className='basket'>
                
                </div>
            )}
        </>
    );
}

export default Basket;