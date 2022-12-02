import {useState} from 'react';
import IFavorites from './Models/IFavorites.interface';

const Favorites = () => {
    const [Favorites, setFavorites] = useState<IFavorites>({
        open: false
    })

    return (
        <>
            <div className='menu-buttons__btn'>
                <i className='fa fa-heart' aria-hidden='true'></i>
            </div>

            {Favorites.open && (
                <div className='favorites'>
                
                </div>
            )}
        </>
    );
}

export default Favorites;