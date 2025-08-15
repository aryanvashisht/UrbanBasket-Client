import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function FeaturedSlider() {
  return (
    <div>
       <Swiper
  modules={[Navigation, Pagination, Scrollbar, Autoplay,A11y]}
  spaceBetween={10}
  slidesPerView={1}
   autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
  navigation
  pagination={{ clickable: true }}
//   scrollbar={{ draggable: true }}
  className="h-[500px] w-[1080px] bg-gray-900 rounded-xl border-2 border-white text-black text-center content-center"
>
<SwiperSlide>
    <img className='w-full h-full rounded'
    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
</SwiperSlide>
<SwiperSlide>
    <img className='w-full h-full rounded'
    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
</SwiperSlide>
<SwiperSlide>
    <img className='w-full h-full rounded'
    src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1753787051_desktopsize.jpg?im=Resize=(2368,400)" alt="Onionat5" />
</SwiperSlide>
</Swiper>
    </div>
  )
}

export default FeaturedSlider
