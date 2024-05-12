import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Header.css"
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';

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
                    <div className=' h-screen slide1' >
                        <div className='max-w-[1600px] mx-auto  flex flex-col sm:items-center items-start justify-center h-screen px-3 space-y-3 animate__animated animate__backInLeft' >
                            <h2 className='text-lg sm:text-2xl  font-semibold font-cookie  text-orange-500'>Enjoy Food Enjoy Life</h2>
                            <h1 className=' font-rufina text-2xl sm:text-3xl md:text-5xl'>Deliciousness jumping into the mouth</h1>
                            <Link to='/allFoods'><button className='btn btn-outline rounded-full px-5 mt-3 text-orange-400 border-orange-400'>All Foods</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' h-screen slide2'>
                        <div className='max-w-[1600px] mx-auto  flex flex-col sm:items-center items-start justify-center h-screen px-3 space-y-3 '>
                            <h2 className='text-lg sm:text-2xl  font-semibold font-cookie  text-orange-500'>Good Food Good Mood</h2>
                            <h1 className='font-rufina text-2xl sm:text-3xl md:text-5xl'>Enjoy delicious food with family</h1>
                            <Link to='/allFoods'><button className='btn btn-outline rounded-full px-5 mt-3 text-orange-400 border-orange-400'>All Foods</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' h-screen slide3'>
                        <div className='max-w-[1600px] mx-auto  flex flex-col sm:items-center items-start justify-center h-screen px-3 space-y-3'>
                            <h2 className='text-lg sm:text-2xl  font-semibold font-cookie  text-orange-500'>Stay Healthy Stay Strong</h2>
                            <h1 className='font-rufina text-2xl sm:text-3xl md:text-5xl'>Diet healthy fruits in every morning</h1>
                            <Link to='/allFoods'><button className='btn btn-outline rounded-full px-5 mt-3 text-orange-400 border-orange-400'>All Foods</button></Link>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>);
};

export default Header;