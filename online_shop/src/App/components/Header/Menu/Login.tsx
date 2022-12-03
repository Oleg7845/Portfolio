import {useState} from 'react';
import ILogin from './Models/ILogin.interface';

const Login = () => {
    const [Login, setLogin] = useState<ILogin>({
        open: false
    })

    const toggleLogin = (open: boolean)=> {
        setLogin({open: open})
    }

    return (
        <>
            <div className='menu-buttons__btn' onClick={() => toggleLogin(true)}>
                <i className='fa fa-user' aria-hidden='true'></i>
            </div>

            {Login.open && (
                <div className="login">
                    
                </div>
            )}
        </>
    );
}

export default Login;