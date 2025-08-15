// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Main slider just below Header (center)

function AdsBannerSlider() {
  return (
    <div>
       <Swiper
      modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
       autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-[70%] mb-3 flex justify-start rounded-xl border border-pink-600 mt-2"
    >
      <SwiperSlide>
        <img src="pexels-akos-szabo-145938-440731.jpg" className="w-full h-110 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="pexels-bri-schneiter-28802-346529.jpg" className="w-full h-110 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="pexels-pripicart-620337.jpg" className="w-full h-110 object-cover" />
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default AdsBannerSlider
