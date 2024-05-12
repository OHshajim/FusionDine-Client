import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
const OurChefs = () => {
    return (
        <div className="my-20 mx-auto max-w-[1600px] px-5">
            <div className="flex flex-col justify-center items-center">
                <h2 className=" text-2xl md:text-4xl mb-4 font-rufina font-bold ">Our Experience Chefs</h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>
            <div className='my-10 md:my-16 '>
                <Swiper
                modules={[Navigation, Autoplay]}
                    breakpoints={{
                        1024: { slidesPerView: 2 },
                        1324: { slidesPerView: 3 },
                    }}
                    
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    speed={2000}
                    navigation={true}
                    
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex  justify-center'>
                            <div className='relative group '>
                                <img src="https://i.ibb.co/ZzHghcs/team-img-2-3.jpg" alt="chef" />
                                <div className='absolute rounded-md bottom-2 left-2 hover:border-4 group-hover:visible hover:border-orange-500 invisible p-5 bg-white text-black  hover:-translate-y-2 hover:translate-x-2 hover:duration-500'>
                                    <h3 className='text-xl font-bold font-rufina'>Mr. Fahim</h3>
                                    <p className='text-sm '>Master Chef</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex  justify-center'>
                            <div className='relative group '>
                                <img src="https://i.ibb.co/zHzp6ZR/team-img-2-2.jpg" alt="chef" />
                                <div className='absolute rounded-md bottom-2 left-2 hover:border-4 group-hover:visible hover:border-orange-500 invisible p-5 bg-white text-black  hover:-translate-y-2 hover:translate-x-2 hover:duration-500'>
                                    <h3 className='text-xl font-bold font-rufina'>Ms. ALex</h3>
                                    <p className='text-sm '> Sous Chef</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex  justify-center'>
                            <div className='relative group '>
                                <img src="https://i.ibb.co/wsN7KKX/team-img-2-4.jpg" alt="chef" />
                                <div className='absolute rounded-md bottom-2 left-2 hover:border-4 group-hover:visible hover:border-orange-500 invisible p-5 bg-white text-black  hover:-translate-y-2 hover:translate-x-2 hover:duration-500'>
                                    <h3 className='text-xl font-bold font-rufina'>Mr. Sahariya</h3>
                                    <p className='text-sm '>Grill & Nun Chef</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex  justify-center'>
                            <div className='relative group '>
                                <img src="https://i.ibb.co/1R1Rfxf/team-img-2-1.jpg" alt="chef" />
                                <div className='absolute rounded-md bottom-2 left-2 hover:border-4 group-hover:visible hover:border-orange-500 invisible p-5 bg-white text-black  hover:-translate-y-2 hover:translate-x-2 hover:duration-500'>
                                    <h3 className='text-xl font-bold font-rufina'>Mr. Rasel</h3>
                                    <p className='text-sm '>Pastry Chef</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default OurChefs;