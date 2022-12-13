import {useState} from 'react';
import {IPopupState} from '../Models/ILogin.interface';
import ProfileMenu from './ProfileMenu';
import Popup from '../../../Popup';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const Profile = () => {
    const [PopupState, setPopupState] = useState<IPopupState>({
        open: false,
        auth: true
    })

    const [ProfileForm, setProfileForm] = useState<Boolean>(true)

    const openPopup = () => {
        setPopupState({open: true, auth: PopupState.auth})
    }

    const closePopup = () => {
        toggleProfileForm(true)
        setPopupState({open: false, auth: PopupState.auth})
    }

    const toggleProfileForm = (type: boolean) => {
        setProfileForm(type)
    }

    return (
        <>
            {PopupState.auth
                ?
                    <div className='menu-buttons__btn'>
                        <i className='fa fa-user' aria-hidden='true'></i>
                    </div>
                :
                    <div className='menu-buttons__btn' onClick={() => openPopup()}>
                        <i className='fa fa-user' aria-hidden='true'></i>
                    </div>
            }

            <ProfileMenu/>

            <Popup open={PopupState.open} closePopup={closePopup}>
                {ProfileForm
                    ? <h3 className='profile__title'>Login</h3>
                    : <h3 className='profile__title'>Registration</h3>
                }
                {ProfileForm
                    ?
                        <LoginForm closePopup={closePopup} />
                    :
                        <RegistrationForm closePopup={closePopup} />
                }

                <span className='profile__type-selector' onClick={() => toggleProfileForm(!ProfileForm)}>
                    {ProfileForm
                        ? <p>Registration</p>
                        : <p>Login</p>
                    }
                </span>
            </Popup>
        </>
    );
}

export default Profile;