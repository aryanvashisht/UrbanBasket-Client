import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';
import ProductBrief from '../Product/ProductBrief';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ProductsSlider = () => {
  const navigate = useNavigate();
  const [activeCartId, setActiveCartId] = useState();
  const [category, setCategory] = useState();
  const productState = useSelector((state) => state.Products);
  const user = useSelector((state) => state.userOperations);

  useEffect(()=>{
    console.log(productState.products[0]?.Id)
console.log(user);
  },[productState,user]  )

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={2}
      slidesPerView={5.5}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-[99%]"
    >
      {productState.products?.map((prod, index) => (
        <SwiperSlide key={index} className=" rounded">
          <ProductBrief name={prod.name} price={prod.price} discount={prod.discount} image={prod.image} Id={prod.Id} available={prod.available} activeCartId={activeCartId} setActiveCartId={setActiveCartId}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;
