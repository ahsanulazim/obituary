import { useEffect, useState } from 'react';
import Logo from '../assets/Images/Logo-Dark.svg'
import Button from './Button';
import { FaBarsStaggered } from 'react-icons/fa6';

const Header = () => {

    const [Scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItem = <><li><a href='/' className='hover:text-main hover:bg-transparent'>Home</a></li>
        <li>
            <a className='hover:text-main hover:bg-transparent'>Obituaries</a>
        </li>
        <li><a className='hover:text-main hover:bg-transparent'>Plan & Pricing</a></li></>

    return (
        <header className={`w-full sticky min-[480px]:fixed max-[480px]:bg-dark top-0 z-50 lg:py-4 transition-all duration-300 ${Scroll ? 'bg-dark shadow-md' : 'bg-transparent'
            }`}>
            <div className='navbar max-w-[1380px] mx-auto max-[1380px]:px-4 p-0'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} role="button" className="flex items-center focus:text-main lg:hidden mr-3">
                            <FaBarsStaggered size={18} />
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <a className="" href="/"><img src={Logo} alt="Worldwide Obituary Logo" draggable="false" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-3">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Button text={"Recent Loss"} />
                </div>
            </div>
        </header>
    );
};

export default Header;