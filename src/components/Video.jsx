import { FaPlay } from "react-icons/fa6";
import thumbnail from "../assets/Images/Video Thumbnail.png";


const Video = () => {
    return (
        <section className="bg-[#d5f0f2] py-12 min-[420px]:py-20 min-[500px]:py-28 sm:py-32">
            <div className="bg-main relative h-[120px] min-[365px]:h-[160px] min-[440]:h-[200px] min-[635px]:h-[300px] min-[960px]:h-[460px] xl:h-[600px]">
                <div className=" absolute top-1/2 left-1/2 translate-[-50%] w-full px-5">
                    <div className="relative">
                        <img src={thumbnail} alt="video thumbnail" className="mx-auto" />
                        <h2 className="text-sm sm:text-xl md:text-3xl lg:text-5xl font-bold text-center absolute top-4 sm:top-10 left-1/2 translate-x-[-50%] w-full">Plan a Beautiful Personalized <br /> Digital Remembrance</h2>
                        <button className=" rounded-full bg-main p-3 sm:p-6 absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] cursor-pointer hover:bg-second z-10">
                            <FaPlay className="text-lg sm:text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;