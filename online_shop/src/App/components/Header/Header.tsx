import {useState, useEffect} from 'react';
import ISmartphone from '../models/ISmartphone.interface';
import Smartphones_list from '../data/Smartphones_list';
import TopBanner from './TopBanner/TopBanner';
import Nav from './Menu/Nav';
import Search from './Menu/Search';
import Login from './Menu/Login';
import Compare from './Menu/Compare';
import Favorites from './Menu/Favorites';
import Basket from './Menu/Basket';

const Header = () => {
    const [Smartphones, setSmartphones] = useState<ISmartphone[]>([...Smartphones_list])

    useEffect(() => {
        Smartphones.map(product => console.log(product))
    });

    return (
        <header className='header'>
            <TopBanner/>
            
            <div className='menu'>
                <a className='menu-logo' href='#'>OnlineShop</a>

                <Nav/>
                <Search/>

                <div className='menu-buttons'>
                    <Login/>
                    <Compare/>
                    <Favorites/>
                    <Basket/>
                </div>
            </div>
        </header>
    );
}

export default Header;