import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
import image1 from '../assets/Images/carousel-1.webp';
import image2 from '../assets/Images/carousel-2.webp';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from './Button';

const Carousel = () => {
    return (
        <div className="relative">
            <Swiper navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
            }} autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
                modules={[Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <div className={`bg-[url(assets/Images/carousel-1.webp)] bg-contain bg-no-repeat relative`}>
                        <img src={image1} alt="" className="invisible" />
                        <div className="absolute top-1/2 translate-[-50%] left-1/2 text-center w-full">
                            <h1 className="font-bold text-md sm:text-xl md:text-3xl xl:text-5xl mb-2 xl:mb-7">Celebrating the life of loved<br /> ones passed begins here</h1>
                            <p className="hidden sm:block sm:text-xs md:text-sm xl:text-xl mb-4 xl:mb-12">We Support you with the flest Options to Make Their<br /> Journey one less Thing to Wofty About..</p>
                            <div className="flex gap-4 md:gap-8 justify-center"> <Button text={"Learn More"} /><Button border={"border"} text={"Contact Us"} /> </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className={`bg-[url(assets/Images/carousel-2.webp)] bg-contain bg-no-repeat relative`}>
                    <img src={image2} alt="" className="invisible" />
                    <div className="absolute top-1/2 translate-y-[-50%] left-1/2">
                        <h1 className="font-bold text-md max-md:leading-5 sm:text-xl md:text-3xl xl:text-5xl mb-2 xl:mb-7">Honor cherished memories<br /> with a personalized<br /> printable e-book</h1>
                        <div className="flex gap-4 md:gap-8"> <Button text={"See More"} /><Button border={"border"} text={"Ebook"} /> </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            <div className="hidden md:flex justify-between absolute w-full z-10 bottom-1/2 translate-y-[50%] px-4 min-[1440px]:px-20">
                <button className="swiper-button-prev-custom bg-main/35 p-3 rounded-full opacity-50 hover:opacity-100">
                    <FaChevronLeft size={24} />
                </button>
                <button className="swiper-button-next-custom bg-main/35 p-3 rounded-full opacity-50 hover:opacity-100">
                    <FaChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;