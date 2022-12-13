interface IPopupProps {
    open: boolean,
    closePopup: Function,
    children: React.ReactNode
}

const Popup = ({open, closePopup, children}: IPopupProps) => {

    return (
        <>
            {open && (
                <div className='modal-shadow'>
                    <div className='modal-window'>
                        <span className="modal-window__close"
                            onClick={() => {
                                closePopup()
                            }}>
                        </span>
                        {children}
                    </div>
                </div>
                
            )}
        </>
    );
}

export default Popup;