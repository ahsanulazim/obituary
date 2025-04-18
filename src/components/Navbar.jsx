import { FaBarsStaggered } from 'react-icons/fa6';
import Logo from '../assets/Images/Logo-Dark.svg'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [Scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItem = <><li><a href='/obituary' className='hover:text-main hover:bg-transparent'>Home</a></li>
        <li>
            <a className='hover:text-main hover:bg-transparent'>Obituaries</a>
        </li>
        <li><a className='hover:text-main hover:bg-transparent'>Plan & Pricing</a></li></>
    return (
        <header className={`sticky min-[480px]:fixed max-[480px]:bg-dark drawer fixed top-0 z-50 ${Scroll ? 'bg-dark shadow-md' : 'bg-transparent'
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
                    <div className="mx-2 navbar-start"><a className="" href="/obituary"><img src={Logo} alt="Worldwide Obituary Logo" draggable="false" /></a></div>
                    <div className="hidden flex-none lg:block navbar-center">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navItem}
                        </ul>
                    </div>
                    <div className='navbar-end'>
                        <button className="btn btn-sm md:btn-md md:px-7 md:py-6 bg-gradient-to-r from-main to-common hover:text-second">Recent Loss</button>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {navItem}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;