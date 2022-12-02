const Search = () => {

    return (
        <div className='menu-search'>
            <form className='menu-search__form'>
                <input className='menu-search__input' type='text' placeholder='Search'/>
                <button className='menu-search__btn'>
                    <i className='fa fa-search' aria-hidden='true'></i>
                </button>
            </form>
        </div>
    );
}

export default Search;