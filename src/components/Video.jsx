import { FaPlay } from "react-icons/fa6";
import thumbnail from "../assets/Images/Video Thumbnail.png";


const Video = () => {
    return (
        <section className="bg-[#d5f0f2] py-32 px-5">
            <div className="bg-main relative h-[600px]">
                <div className=" absolute top-1/2 left-1/2 translate-[-50%] w-full">
                    <div className="relative">
                        <img src={thumbnail} alt="video thumbnail" className="mx-auto" />
                        <h2 className="text-5xl font-bold text-center absolute top-10 left-1/2 translate-x-[-50%]">Plan a Beautiful Personalized <br /> Digital Remembrance</h2>
                        <button className=" rounded-full bg-main p-6 absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] cursor-pointer hover:bg-second">
                            <FaPlay size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;