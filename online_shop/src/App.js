import React, {useState} from 'react';
import './styles/css/App.min.css';

function App() {
    const [TopBanner, setTopBannerState] = useState({
        text: '-70% Disconts in our OnlineShop!',
        open: true
    })

    const [Sublist, setSublistState] = useState({
        id: '',
        open: false
    })
    
    const closeTopBanner = ()=> {
        setTopBannerState({text: TopBanner.text, open: false})
    }

    const toggleSublist = (id, open)=> {
        setSublistState({id: id, open: open})
    }

    return (
        <div className='App'>
            <header className='header'>
                {
                    TopBanner.open && (
                        <div className='top-banner'>
                            <h3 className='top-banner__text'>{TopBanner.text}</h3>
                            
                            <div className='top-banner__close' onClick={closeTopBanner}>
                                <span></span>
                            </div>
                        </div>
                    )
                }
                
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
                                    onMouseEnter={() => toggleSublist(9, true)}
                                    onMouseLeave={() => toggleSublist('', false)}
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
                                        onMouseEnter={() => toggleSublist('12', true)}
                                        onMouseLeave={() => toggleSublist('', false)}
                                    >Product 4</a>
                                </li>
                                <li className='menu-nav__item'>
                                    <a className='menu-nav__link' href='#'>Product 5</a>
                                </li>
                            </ul>


                        {Sublist.id == 9 && Sublist.open
                            ? <ul className='menu-nav__sublist'
                                    onMouseEnter={() => toggleSublist(9, true)}
                                    onMouseLeave={() => toggleSublist(9, false)}>
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
                            
                        {Sublist.id == 12 && Sublist.open
                            ? <ul className='menu-nav__sublist'
                                    onMouseEnter={() => toggleSublist(12, true)}
                                    onMouseLeave={() => toggleSublist(12, false)}>
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

                            <span className='menu-buttons__shopping-count'>5</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;