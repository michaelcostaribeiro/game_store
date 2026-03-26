import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
    const consoles = [
        { id: 1, text: 'Nintendo' },
        { id: 2, text: 'Playstation' },
        { id: 3, text: 'Xbox' },
    ]
    return <nav className='text-amber-50 container mx-xl m-auto py-3'>
        <div className='flex items-center justify-between px-3'>
            <h1 className=''>GameStore</h1>
            <form className=' rounded-sm flex items-center text-amber-50 '>
                <input type="text" name="" id="" placeholder='Search' className='grow focus:outline-0' />
                <button type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            <div>
                <Link href="#" className=' rounded-sm ml-1'><FontAwesomeIcon icon={faUser} /></Link>
                <Link href="#" className=' rounded-sm  ml-1'><FontAwesomeIcon icon={faCartArrowDown} /></Link>
            </div>
        </div>
        <div className='w-screen h-px -ml-[50vw] -mr-[50vw] bg-white my-2  relative left-1/2 right-1/2'></div>
        
        <ul className='flex gap-5 items-center justify-center'>
            {consoles.map((console) => (
                <li key={console.id}>
                    <Link href="#" className='text-amber-50'>{console.text}</Link>
                </li>
            ))}
        </ul>
    </nav>
};

export default Navbar;

