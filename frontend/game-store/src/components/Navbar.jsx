import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const consoles = [
        { id: 1, text: 'Nintendo' },
        { id: 2, text: 'Playstation' },
        { id: 3, text: 'Xbox' },
    ]
    return <nav className='text-pink-600'>
        <div className='flex  justify-between'>
            <h1 className=''>GameStore</h1>
            <ul className='flex gap-5'>
                {consoles.map((console) => (
                    <li key={console.id}>
                        <a href="" className='text-amber-50'>{console.text}</a>
                    </li>
                ))}
            </ul>
            <div>
                <a href="#" className='p-1 rounded-sm border-1 border-indigo-600 ml-1'><FontAwesomeIcon icon={faUser} /></a>
                <a href="#" className='p-1 rounded-sm border-1 border-indigo-600 ml-1'><FontAwesomeIcon icon={faCartArrowDown} /></a>
            </div>
        </div>
        <form className='p-1 mt-2 border-1 border-transparent  rounded-sm flex text-amber-50 has-focus-within:border-indigo-600'>
            <input type="text" name="" id="" placeholder='Search' className='grow focus:outline-0' />
            <button type='submit'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    </nav>
};

export default Navbar;

