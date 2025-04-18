import { FaPlay } from "react-icons/fa6";
import thumbnail from "../assets/Images/Video Thumbnail.png";


const Video = () => {
    return (
        <section className="bg-[#d5f0f2] py-12 min-[420px]:py-20 min-[500px]:py-28 sm:py-32">
            <div className="bg-main relative h-[120px] min-[365px]:h-[160px] min-[440px]:h-[200px] min-[635px]:h-[300px] min-[960px]:h-[500px] xl:h-[600px]">
                <div className=" absolute top-1/2 left-1/2 translate-[-50%] w-full px-5">
                    <div className="relative">
                        <img src={thumbnail} alt="video thumbnail" className="mx-auto" />
                        <h2 className="text-sm sm:text-xl md:text-3xl lg:text-5xl font-bold text-center absolute top-4 sm:top-10 left-1/2 translate-x-[-50%] w-full">Plan a Beautiful Personalized <br /> Digital Remembrance</h2>

                        <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] z-10">
                            <div className="relative w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28">
                                {/* Circular Button */}
                                <div className="w-7 h-7 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-main hover:bg-second transition-colors duration-300 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <FaPlay className="text-white text-sm sm:text-xl" />
                                </div>

                                {/* Orbiting Text */}
                                <div className="absolute hidden md:block inset-0 animate-spin-slow">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <defs>
                                            <path
                                                id="orbitPath"
                                                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                                            />
                                        </defs>
                                        <text fill="#fff" fontSize="10" fontWeight="bold">
                                            <textPath
                                                xlinkHref="#orbitPath"
                                                startOffset="0"
                                                textLength="240"
                                            >
                                                • Get a Free Guide & Quote
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;