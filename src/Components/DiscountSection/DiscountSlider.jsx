import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from '@mui/material/Button';

const DiscountSlider = () => {
    return (
        <div>
            <h1 className='ml-8 text-4xl m-2'>EXCLUSIVE OFFERS</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                className="w-[98%] flex justify-start  mt-2"
            >
                <SwiperSlide>
                    <Button><img className='w-full h-65 border rounded'
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
                </Button>
                    </SwiperSlide>
                <SwiperSlide>
                    <img className='!w-full h-65 border rounded'
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='!w-full h-65 border rounded'
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-65 border rounded'
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-65 border rounded'
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='!w-full h-65 border rounded'
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DiscountSlider
