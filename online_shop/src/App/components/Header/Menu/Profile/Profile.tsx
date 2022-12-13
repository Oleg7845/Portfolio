import {useState} from 'react';
import {IPopupState, ILoginMethod, ILoginType} from '../Models/ILogin.interface';
import Popup from '../../../Popup';
import ProfileForm from './ProfileForm';

const Profile = () => {
    const [PopupState, setPopupState] = useState<IPopupState>({
        open: false,
        auth: false
    })

    const [LoginMethod, setLoginMethod] = useState<ILoginMethod>({
        method: true
    })

    const [LoginType, setLoginType] = useState<ILoginType>({
        type: true
    })

    const openPopup = () => {
        setPopupState({open: true, auth: PopupState.auth})
    }

    const closePopup = () => {
        toggleLoginType(true)
        toggleLoginMethod(true)
        setPopupState({open: false, auth: PopupState.auth})
    }

    const toggleLoginMethod = (method: boolean) => {
        setLoginMethod({method: method})
    }

    const toggleLoginType = (type: boolean) => {
        setLoginType({type: type})
    }

    return (
        <>
            <div className='menu-buttons__btn' onClick={() => openPopup()}>
                <i className='fa fa-user' aria-hidden='true'></i>
            </div>

            <Popup open={PopupState.open} closePopup={closePopup}>
                {LoginType.type
                    ? <h3 className='profile__title'>Login</h3>
                    : <h3 className='profile__title'>Registration</h3>
                }
                {LoginType.type
                    ?
                        <ProfileForm closePopup={closePopup}>
                            {LoginMethod.method
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

                            <span className='profile__method-selector' onClick={() => toggleLoginMethod(!LoginMethod.method)}>
                                {LoginMethod.method
                                    ? <p>Login with E-mail</p>
                                    : <p>Login with Phonenumber</p>
                                }
                            </span>
                        </ProfileForm>
                    :
                        <ProfileForm closePopup={closePopup}>
                            <input className='profile__input' type="text" placeholder='Name'/>
                            <input className='profile__input' type="phone" placeholder='Phone'/>
                            <input className='profile__input' type="email" placeholder='Email'/>
                            <input className='profile__input' type="password" placeholder='Password'/>
                            <input className='profile__input' type="password" placeholder='Confirm password'/>
                            <button className='profile__submit-btn' type='submit'>Registration</button>
                        </ProfileForm>
                }

                <span className='profile__type-selector' onClick={() => toggleLoginType(!LoginType.type)}>
                    {LoginType.type
                        ? <p>Registration</p>
                        : <p>Login</p>
                    }
                </span>
            </Popup>
        </>
    );
}

export default Profile;