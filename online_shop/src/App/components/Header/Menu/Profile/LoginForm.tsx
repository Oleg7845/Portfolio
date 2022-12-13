import {useState} from 'react';
import ProfileForm from './ProfileForm';

interface IProfileForm {
    closePopup: Function
}

const LoginForm = ({closePopup}: IProfileForm) => {
    const [LoginMethod, setLoginMethod] = useState<Boolean>(true)

    const toggleLoginMethod = (method: boolean) => {
        setLoginMethod(method)
    }

    return (
        <ProfileForm closePopup={closePopup}>
            {LoginMethod
                ?
                <>
                    <p className='profile__method-name'>To enter, enter your Phonenumber</p>
                    <input className='profile__input' type="phone" placeholder='Phone'/>
                </>
                :
                <>
                    <p className='profile__method-name'>To enter, enter your E-mail</p>
                    <input className='profile__input' type="email" placeholder='Email'/>
                </>
            }
            
            <input className='profile__input' type="password" placeholder='Password'/>
            <button className='profile__submit-btn' type='submit'>Login</button>

            <span className='profile__method-selector' onClick={() => toggleLoginMethod(!LoginMethod)}>
                {LoginMethod
                    ? <p>Login with E-mail</p>
                    : <p>Login with Phonenumber</p>
                }
            </span>
        </ProfileForm>
    );
}

export default LoginForm;