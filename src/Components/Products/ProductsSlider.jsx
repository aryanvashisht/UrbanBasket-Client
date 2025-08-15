import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useState } from 'react';

const imagePaths = [
  "pexels-akos-szabo-145938-440731.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg",
  "pexels-akos-szabo-145938-440731.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg",
  "pexels-akos-szabo-145938-440731.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg",
  "pexels-akos-szabo-145938-440731.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg",
  "pexels-akos-szabo-145938-440731.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg",
  "pexels-akos-szabo-145938-440731.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg",
  "pexels-akos-szabo-145938-440731.jpg",
  "pexels-bri-schneiter-28802-346529.jpg",
  "pexels-pripicart-620337.jpg"
];

const ProductsSlider = () => {
    const [value,setValue]=useState(4);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={5}
      slidesPerView={10}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-[99%] mx-3 mb-3 mt-2"
    >
      {imagePaths.map((src, index) => (
        <SwiperSlide key={index} className="border border-white rounded">
           <Link
            to={`/product/${index + 1}`} // Dynamic route for each product
            className="p-0 flex flex-col w-full bg-transparent text-white"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-50 object-cover rounded-t"
            />
            <div className="p-1 text-lg text-center bg-black bg-opacity-60 w-full rounded-b">
              Product {index + 1}
            </div>
            <div className="p-1 text-md bg-black bg-opacity-60 w-full rounded-b">
              Price  ₹{index*100 - 1}
            </div>
            <div className="p-1 text-md bg-black bg-opacity-60 w-full rounded-b">
              Discount {index + 1}
            </div>
            <Box sx={{ '& > legend': { mt: 2 } }}>

      <Rating className="ml-3 mt-1 mb-2" name="read-only" value={value} readOnly />
      {/* <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;
