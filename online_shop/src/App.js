import React from 'react';
import './styles/css/App.min.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
      <div className="top-banner">
                <h3 className="top-banner__text">-70% Disconts in our OnlineShop!</h3>
                
                <div className="top-banner__close">
                    <span></span>
                </div>
            </div>
            
            <div className="menu">
                <a className="menu-logo" href="#">OnlineShop</a>
                
                <nav className="menu-nav">
                    <div className="menu-nav__catalog-btn">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <h3>Catalog</h3>
                    </div>

                </nav>
                
                <div className="menu-search">
                    <form className="menu-search__form">
                        <input className="menu-search__input" type="text" placeholder="Search"/>
                        <button className="menu-search__btn">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>

                <div className="menu-buttons">
                    <div className="menu-buttons__btn">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="menu-buttons__btn">
                        <i className="fa fa-balance-scale" aria-hidden="true"></i>
                    </div>
                    <div className="menu-buttons__btn">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                    <div className="menu-buttons__btn menu-buttons__basket">
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>

                        <span className="menu-buttons__shopping-count">5</span>
                    </div>
                </div>
            </div>
      </header>
    </div>
  );
}

export default App;
