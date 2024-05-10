import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Header.css"
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
// import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
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
                speed={1500}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >

                <SwiperSlide>
                    <div className=' h-screen slide1'>
                        <div className='max-w-[1600px] mx-auto  flex flex-col sm:items-center items-start justify-center h-screen px-3 space-y-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Enjoy Food Enjoy Life</h2>
                            <p className='text-sm'>Deliciousness jumping into the mouth</p>
                            <Link to='/allFoods'><button className='btn btn-outline rounded-full px-5'>All Foods</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' h-screen slide2'>
                        <div className='max-w-[1600px] mx-auto  flex flex-col sm:items-center items-start justify-center h-screen px-3 space-y-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Good Food Good Mood</h2>
                            <p className='text-sm'>Enjoy delicious food with family</p>
                            <Link to='/allFoods'><button className='btn btn-outline rounded-full px-5'>All Foods</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' h-screen slide3'>
                        <div className='max-w-[1600px] mx-auto  flex flex-col sm:items-center items-start justify-center h-screen px-3 space-y-3'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Stay Healthy Stay Strong</h2>
                            <p className='text-sm'>Diet healthy fruits in every morning</p>
                            <Link to='/allFoods'><button className='btn btn-outline rounded-full px-5'>All Foods</button></Link>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>);
};

export default Header;