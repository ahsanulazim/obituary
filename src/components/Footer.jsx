import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaXTwitter } from 'react-icons/fa6';
import Logo from '../assets/Images/Logo-Dark.svg'

const Footer = () => {
    return (<>
        <footer className="bg-silent ">
            <footer className="footer grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !grid-flow-dense sm:footer-horizontal max-w-[1380px] mx-auto pt-20 pb-10 px-4 justify-between">
                <aside>
                    <img src={Logo} alt="Worldwide Obituary Logo" className='mb-1' />
                    <p className='max-w-3xs text-base text-main mb-4'>
                        We do accept cremains from
                        throughout the United States
                        and the world. Many of our
                        families come from the
                        phoenix are as well as various.
                    </p>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaFacebook className='size-6 hover:text-main cursor-pointer' />
                        </a>
                        <a>
                            <FaInstagram className='size-6 hover:text-main cursor-pointer' />
                        </a>
                        <a>
                            <FaXTwitter className='size-6 hover:text-main cursor-pointer' />
                        </a>
                        <a>
                            <FaLinkedin className='size-6 hover:text-main cursor-pointer' />
                        </a>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-white opacity-100 text-lg">Our Hours</h6>
                    <div className="overflow-x-auto">
                        <table className="table border-separate text-main">


                            <tbody>
                                {/* row 1 */}
                                <tr className=''>

                                    <td className="p-0 pr-4 py-1 text-base">Weekdays</td>

                                    <td className="p-0 text-right text-base">09:00-17:00</td>
                                </tr>
                                {/* row 2 */}
                                <tr>

                                    <td className="p-0 py-1 text-base">Saturday</td>

                                    <td className="p-0 text-right text-base">09:00-17:00</td>
                                </tr>
                                {/* row 3 */}
                                <tr>

                                    <td className="p-0 py-1 text-base">Sunday</td>

                                    <td className="p-0 text-right text-base">Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </nav>
                <form>
                    <h6 className="footer-title text-white opacity-100 text-lg">Newsletter</h6>
                    <fieldset className="w-full">
                        <label className='text-main mb-4 text-base'>Stay updated with recent <br /> news and discount. </label><br />
                        <div className="join mt-4">
                            <input
                                type="email"
                                placeholder="username@email.com"
                                className="input validator input-bordered join-item" required />
                            <button className="btn bg-gradient-to-r from-main to-common hover:text-second join-item">Send</button>

                        </div>
                    </fieldset>
                </form>
                <nav>
                    <h6 className="footer-title text-white opacity-100 text-lg">Contacts</h6>
                    <ul className=" flex flex-col gap-2 text-xs">
                        <li>
                            <FaLocationArrow className='size-4 me-2 inline-block' />
                            <span className='text-base text-main'>High-resolution image generation</span>
                        </li>
                        <li>
                            <FaPhone className='size-4 me-2 inline-block' />
                            <span className='text-base text-main'>Customizable style templates</span>
                        </li>
                        <li>
                            <FaEnvelope className='size-4 me-2 inline-block' />
                            <span className='text-base text-main'>Batch processing capabilities</span>
                        </li>
                    </ul>
                </nav>

            </footer>
        </footer >
        <footer className="bg-silent">
            <footer className="footer gap-y-2 justify-center justify-items-center sm:justify-between sm:footer-horizontal max-w-[1380px] mx-auto items-center p-4 text-main text-base">
                <aside className="grid-flow-col items-center">

                    <p>© Copyright {new Date().getFullYear()} - All rights reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end order-first sm:order-none">
                    <a className="cursor-pointer hover:text-common">
                        Contact Us
                    </a>
                    <a className="cursor-pointer hover:text-common">
                        Terms
                    </a>

                </nav>
            </footer></footer></>
    );
};

export default Footer;