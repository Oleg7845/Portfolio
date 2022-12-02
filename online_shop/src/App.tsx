import React, {useState, useEffect} from 'react';
import './styles/css/App.min.css';

function App() {
    const [Products, setProducts] = useState({
        id: new Date(),
        artikel: '82NX00F6GE',
        trademark: 'SAMSUNG',
        title: 'Galaxy A52s 5G 128 GB Awesome Black Dual SIM',
        price: 318,
        description: 'SAMSUNG uses Android 11.0, One UI 3.1, KNOX 3.7 as the interface between hardware and software for this product. Do you live near the nearest big city and need fast mobile Internet? With Galaxy A52s 5G you can use the following standards: 2G (GSM), 3G (UMTS), 4G (LTE) and 5G. Thanks to the Snapdragon 778G (SM7325-2-AB) processor, the smartphone is able to perform any kind of computing productively. So you can count on the flawless operation of all functions of the device. The internal memory of the smartphone has 128 GB of free space. You can install many applications on it without using an additional SD card. To replenish the internal memory, you can insert micro SD cards into the device. This allows you to set up local capacity for photos on vacation, for example. Whether it is private or work, this phone ensures that you can complete all tasks quickly and without unnecessary wait times. Its performance is due in large part to the device is powerful 6GB of RAM. The SIM card format is Nano-SIM (4FF). When you sign up for a cell phone contract, you should ask your provider to send you a card of this size so that you can use it with this smartphone. Use the second slot for the second SIM card and switch easily between the two cards.',
        characteristics: {
            OS: 'Android 11.0',
            processor: 'Snapdragon 778G (SM7325-2-AB)',
            processor_frequency: '4x 2.4 GHz + 4x 1.8 GHz',
            RAM: '6 GB',
            memory: '128 GB',
            display: {
                diagonal: '6.5',
                resolution: '2400 х 1080 Pixels'
            },
            camera: {
                resolution: '64 Megapixel',
                integrated_flash: 'Yes',
                face_detection: 'Yes'
            },
            functions: {
                fingerprint: 'Yes',
                GPS_module: 'Yes',
                Dual_SIM: 'Yes'
            },
            battery: {
                type: 'Li-Ion',
                capacity: '4500 мАч'
            },
        },
        reviews: {
            reating: 0.80,
            title: 'Very good product',
            text: 'So far so good, I am satisfied, recommended to do what a smartphone should do'
        }
    })

    interface ITopBanner {
        open: boolean,
        text: string
    }
    interface ISublist {
        open: boolean,
        id: number | null
    }
    interface ICompare {
        open: boolean
    }
    interface IFavorites {
        open: boolean
    }
    interface IBasket {
        open: boolean,
        products: any[]
    }

    const [TopBanner, setTopBanner] = useState<ITopBanner>({
        open: true,
        text: '-70% Disconts in our OnlineShop!'
    })

    const [Sublist, setSublist] = useState<ISublist>({
        open: false,
        id: null
    })

    const [Compare, setCompare] = useState<ICompare>({
        open: false
    })

    const [Favorites, setFavorites] = useState<IFavorites>({
        open: false
    })

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

    useEffect(() => {
        
    });
    
    const closeTopBanner = ()=> {
        setTopBanner({open: false, text: TopBanner.text})
    }

    const toggleSublist = (open: boolean, id: number | null)=> {
        setSublist({id: id, open: open})
    }



    return (
        <div className='App'>
            <header className='header'>
                {TopBanner.open && (
                    <div className='top-banner'>
                        <h3 className='top-banner__text'>{TopBanner.text}</h3>
                        
                        <div className='top-banner__close' onClick={closeTopBanner}>
                            <span></span>
                        </div>
                    </div>
                )}
                
                <div className='menu'>
                    <a className='menu-logo' href='#'>OnlineShop</a>
                    
                    <nav className='menu-nav'>
                        <div className='menu-nav__catalog-btn'>
                            <i className='fa fa-bars' aria-hidden='true'></i>
                            <h3>Catalog</h3>
                        </div>

                        <div className='menu-nav__catalog'>
                            <ul className='menu-nav__list'>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'
                                    data-sublist-id='9'
                                    onMouseEnter={() => toggleSublist(true, 9)}
                                    onMouseLeave={() => toggleSublist(false, null)}
                                    >Product 1</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>Product 2</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>Product 3</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'
                                        data-sublist-id='12'
                                        onMouseEnter={() => toggleSublist(true, 12)}
                                        onMouseLeave={() => toggleSublist(false, null)}
                                    >Product 4</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>Product 5</a>
                                </li>
                            </ul>


                        {Sublist.id === 9 && Sublist.open
                            ? <ul className='menu-nav__sublist'
                                    onMouseEnter={() => toggleSublist(true, 9)}
                                    onMouseLeave={() => toggleSublist(false, null)}>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 1</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 2</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 3</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 4</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 5</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 5</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 5</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 5</a>
                                </li>
                            </ul>
                            : ''}
                            
                        {Sublist.id === 12 && Sublist.open
                            ? <ul className='menu-nav__sublist'
                                    onMouseEnter={() => toggleSublist(true, 12)}
                                    onMouseLeave={() => toggleSublist(false, null)}>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 1</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 2</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>SubProduct 3</a>
                                </li>
                            </ul>
                            : ''}
                        </div>
                    </nav>
                    
                    <div className='menu-search'>
                        <form className='menu-search__form'>
                            <input className='menu-search__input' type='text' placeholder='Search'/>
                            <button className='menu-search__btn'>
                                <i className='fa fa-search' aria-hidden='true'></i>
                            </button>
                        </form>
                    </div>

                    <div className='menu-buttons'>
                        <div className='menu-buttons__btn'>
                            <i className='fa fa-user' aria-hidden='true'></i>
                        </div>
                        <div className='menu-buttons__btn'>
                            <i className='fa fa-balance-scale' aria-hidden='true'></i>
                        </div>
                        <div className='menu-buttons__btn'>
                            <i className='fa fa-heart' aria-hidden='true'></i>
                        </div>
                        <div className='menu-buttons__btn menu-buttons__basket'>
                            <i className='fa fa-shopping-basket' aria-hidden='true'></i>

                            <span className='menu-buttons__shopping-count'>{Object.keys(Basket.products).length}</span>
                        </div>

                        {Compare.open && (
                            <div className='compare'>
                            
                            </div>
                        )}

                        {Favorites.open && (
                            <div className='favorites'>
                            
                            </div>
                        )}

                        {Basket.open && (
                            <div className='basket'>
                            
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;