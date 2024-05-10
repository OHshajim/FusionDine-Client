import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const OurStrength = () => {
    return (
        <div>
            <div className=' my-20 max-w-[1600px] mx-auto px-5'>
                <div className="flex flex-col justify-center items-center my-16">
                    <h2 className="text-4xl mb-5">Our Strength</h2>
                    <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
                </div>
                <Swiper
                    modules={[Pagination, Scrollbar, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1024: { slidesPerView: 2, spaceBetween: 100 },
                        1324: { slidesPerView: 3, spaceBetween: 100 },
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    speed={1500}
                    loop={true}
                    // freeMode={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >

                    <SwiperSlide>
                        <div
                            className='h-80 border rounded-lg border-b-4 border-r-4 border-double p-10 group hover:border-orange-500  duration-500'
                        >
                            <div className=' flex flex-col items-center justify-center space-y-3'>
                                <img src="https://i.ibb.co/xL1nmzF/wedding-ring-6651399.png" alt="Wedding logo" className="w-24 mb-5" />
                                <h2
                                    className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold group-hover:text-orange-500  duration-500'>Wedding</h2>
                                <p className='text-sm text-center'>Plan your dream wedding with <span className="font-bold group-hover:text-orange-500">FusionDine</span>! we will make every moment feel cozy and special.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='h-80 border rounded-lg border-b-4 border-r-4 border-double p-10 group hover:border-orange-500  duration-500'
                        >
                            <div className=' flex flex-col items-center justify-center space-y-3'>
                                <img src="https://i.ibb.co/P48trFN/cake-6067620.png" alt="Birthday logo" className="w-24 mb-5" />
                                <h2
                                    className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold group-hover:text-orange-500  duration-500'>Birthday</h2>
                                <p className='text-sm text-center'>Birthdays shine brighter at <span className="font-bold group-hover:text-orange-500">FusionDine</span>! Let's make yours unforgettable with delicious food and cozy vibes.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='h-80 border rounded-md border-b-4 border-r-4 border-double p-10 group hover:border-orange-500  duration-500'
                        >
                            <div className=' flex flex-col items-center justify-center space-y-3'>
                                <img src="https://i.ibb.co/3hvp52w/dinner-3979591.png" alt="dinner logo" className="w-24 mb-5" />
                                <h2
                                    className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold group-hover:text-orange-500  duration-500'>Dinner</h2>
                                <p className='text-sm text-center'>Join us for dinner at <span className="font-bold group-hover:text-orange-500">FusionDine</span>! Delicious food, cozy atmosphere, unforgettable memories.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='h-80 border rounded-md border-b-4 border-r-4 border-double p-10 group hover:border-orange-500  duration-500'
                        >
                            <div className=' flex flex-col items-center justify-center space-y-3'>
                                <img src="https://i.ibb.co/nw88PVg/catering-3811648.png" alt="dinner logo" className="w-24 mb-5" />
                                <h2
                                    className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold group-hover:text-orange-500  duration-500'>Catering</h2>
                                <p className='text-sm text-center'>Let <span className="font-bold group-hover:text-orange-500">FusionDine</span> cater your event! We will bring tasty food , friendly service to make your gathering special.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </div >
    );
};

export default OurStrength;