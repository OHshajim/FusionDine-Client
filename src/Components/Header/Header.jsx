import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Header.css"
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
// import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
const Header = () => {
    return (
        <div className='h-screen text-[#d3d1d1]'>
            <Swiper
                modules={[Pagination, Scrollbar, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                speed={1600}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >

                <SwiperSlide>
                    <div className=' h-screen slide1'>
                        <div className='max-w-[1600px] mx-auto  flex flex-col justify-center px-5 sm:px-20 h-screen '>
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Crafting Memorable Getaways: <br />
                            </h2>
                            <h1 className='text-3xl lg:text-5xl font-bold my-5'>SAFAR</h1>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>);
};

export default Header;