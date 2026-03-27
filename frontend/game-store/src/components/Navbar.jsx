// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

// Router
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import LoginButton from './LoginButton';
import { useEffect, useRef, useState } from 'react';

const Navbar = ({ storeTitle }) => {
    const consoles = [
        { id: 1, text: 'Nintendo' },
        { id: 2, text: 'Playstation' },
        { id: 3, text: 'Xbox' },
    ]
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef(null);

    useEffect(() => {
        if (navRef.current) {
            setNavHeight(navRef.current.offsetHeight);
        }
    }, []);
    return <>
        <nav ref={navRef} className='bg-primary text-amber-50 container mx-xl m-auto py-3 fixed'>
            <div className='flex items-center justify-between px-3'>
                <h1 className=''>{storeTitle}</h1>
                <form className=' rounded-sm flex items-center text-amber-50 '>
                    <input type="text" name="" id="" placeholder='Search' className='grow focus:outline-0' />
                    <button type='submit'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
                <div>
                    <LoginButton />
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
        <div style={{ height: `${navHeight}px` }} />
    </>
};

export default Navbar;

