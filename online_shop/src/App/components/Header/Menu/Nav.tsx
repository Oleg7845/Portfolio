import {useState} from 'react';
import ISublist from './Models/ISublist.interface';

const Nav = () => {
    const [Sublist, setSublist] = useState<ISublist>({
        open: false,
        id: null
    })

    const toggleSublist = (open: boolean, id: number | null) => {
        setSublist({open: open, id: id})
    }

    return (
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
    );
}

export default Nav;