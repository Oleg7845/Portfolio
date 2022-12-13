interface IProfileForm {
    closePopup: Function,
    children: React.ReactNode
}

const ProfileForm = ({closePopup, children}: IProfileForm) => {
    return (
        <form className='profile__form'
            onSubmit={(e) => {
                e.preventDefault()
                closePopup()
            }}
        >
            {children}
        </form>
    );
}

export default ProfileForm;