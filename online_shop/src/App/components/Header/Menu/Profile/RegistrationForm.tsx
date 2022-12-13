import ProfileForm from './ProfileForm';

interface IProfileForm {
    closePopup: Function
}

const RegistrationForm = ({closePopup}: IProfileForm) => {
    return (
        <ProfileForm closePopup={closePopup}>
            <input className='profile__input' type="text" placeholder='Name'/>
            <input className='profile__input' type="phone" placeholder='Phone'/>
            <input className='profile__input' type="email" placeholder='Email'/>
            <input className='profile__input' type="password" placeholder='Password'/>
            <input className='profile__input' type="password" placeholder='Confirm password'/>
            <button className='profile__submit-btn' type='submit'>Registration</button>
        </ProfileForm>
    );
}

export default RegistrationForm;