import {useState} from 'react';
import ITopBanner from './ITopBanner.interface'

const TopBanner = () => {

    const [TopBanner, setTopBanner] = useState<ITopBanner>({
        open: true,
        text: '-70% Disconts in our OnlineShop!'
    })
    
    const closeTopBanner = ()=> {
        setTopBanner({open: false, text: TopBanner.text})
    }

    return (
        <>
            {TopBanner.open && (
                <div className='top-banner'>
                    <h3 className='top-banner__text'>{TopBanner.text}</h3>
                    
                    <div className='top-banner__close' onClick={closeTopBanner}>
                        <span></span>
                    </div>
                </div>
            )}
        </>
    );
}

export default TopBanner;