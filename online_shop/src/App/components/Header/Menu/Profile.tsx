import {useState} from 'react';
import {IPopupState, ILoginMethod, ILoginType} from './Models/ILogin.interface';
import Popup from '../../Popup/Popup';

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
                    ? <h3 className='login-registration__title'>Login</h3>
                    : <h3 className='login-registration__title'>Registration</h3>
                }
                {LoginType.type
                    ?
                        <form className='login-registration__form'
                            onSubmit={(e) => {
                                e.preventDefault()
                                closePopup()
                            }}
                        >
                            {LoginMethod.method
                                ?
                                <>
                                    <p className='login-registration__method-name'>To enter, enter your Phonenumber</p>
                                    <input className='login-registration__input' type="phone" placeholder='Phone'/>
                                </>
                                :
                                <>
                                    <p className='login-registration__method-name'>To enter, enter your E-mail</p>
                                    <input className='login-registration__input' type="email" placeholder='Email'/>
                                </>
                            }
                            
                            <input className='login-registration__input' type="password" placeholder='Password'/>
                            <button className='login-registration__submit-btn' type='submit'>Login</button>

                            <span className='login-registration__method-selector' onClick={() => toggleLoginMethod(!LoginMethod.method)}>
                                {LoginMethod.method
                                    ? <p>Login with E-mail</p>
                                    : <p>Login with Phonenumber</p>
                                }
                            </span>
                        </form>
                    :
                        <form className='login-registration__form'
                            onSubmit={(e) => {
                                e.preventDefault()
                                closePopup()
                            }}
                        >
                            <input className='login-registration__input' type="text" placeholder='Name'/>
                            <input className='login-registration__input' type="phone" placeholder='Phone'/>
                            <input className='login-registration__input' type="email" placeholder='Email'/>
                            <input className='login-registration__input' type="password" placeholder='Password'/>
                            <input className='login-registration__input' type="password" placeholder='Confirm password'/>
                            <button className='login-registration__submit-btn' type='submit'>Registration</button>
                        </form>
                }

                <span className='login-registration__type-selector' onClick={() => toggleLoginType(!LoginType.type)}>
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