import {useState} from 'react';
import ICompare from './Models/ICompare.interface';

const Compare = () => {
    const [Compare, setCompare] = useState<ICompare>({
        open: false
    })

    return (
        <>
            <div className='menu-buttons__btn'>
                <i className='fa fa-balance-scale' aria-hidden='true'></i>
            </div>

            {Compare.open && (
                <div className='compare'>
                
                </div>
            )}
        </>
    );
}

export default Compare;