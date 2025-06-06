import { FaBarsStaggered } from 'react-icons/fa6';
import Logo from '../assets/Images/Logo-Dark.svg'
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [Scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItem = <><li><NavLink to="/obituary/" className='hover:text-main hover:bg-transparent'>Home</NavLink></li>
        <li>
            <a className='hover:text-main hover:bg-transparent'>Obituaries</a>
        </li>
        <li><NavLink to="/plan" className='hover:text-main hover:bg-transparent active:text-main'>Plan & Pricing</NavLink></li></>
    return (
        <header className={`sticky min-[480px]:fixed max-[480px]:bg-silent drawer top-0 z-50 ${Scroll ? 'bg-silent' : 'bg-transparent'
            }`}>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full max-w-[1380px] mx-auto">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <FaBarsStaggered size={18} />
                        </label>
                    </div>
                    <div className="mx-2 navbar-start"><Link to="/obituary/"><img src={Logo} alt="Worldwide Obituary Logo" draggable="false" /></Link></div>
                    <div className="hidden flex-none lg:block navbar-center">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navItem}
                        </ul>
                    </div>
                    <div className='navbar-end mr-2'>
                        <button className="btn btn-sm md:btn-md md:px-7 md:py-6 bg-gradient-to-r from-main to-common hover:text-second">Recent Loss</button>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4 text-md">
                    {/* Sidebar content here */}
                    {navItem}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;