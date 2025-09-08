// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const catog = {

  "categories": [
    {
      "name": "Fashion",
      "image": "https://serviceapi.spicezgold.com/download/1754414198666_fashion_cat.png"
    },
    {
      "name": "Electronics",
      "image": "https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
    },
    {
      "name": "Bags",
      "image": "https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
    },
    {
      "name": "Footwear",
      "image": "https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
    },
    {
      "name": "Groceries",
      "image": "https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
    },
    {
      "name": "Beauty",
      "image": "https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
    },
    {
      "name": "Wellness",
      "image": "https://serviceapi.spicezgold.com/download/1741661105893_well.png"
    },
    {
      "name": "Accessories",
      "image": "https://serviceapi.spicezgold.com/download/1749273446706_jw.png"
    }
  ]
}


function HomeCatSlider() {

   const navigate = useNavigate();

  return (
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={10}
  slidesPerView={8}
  navigation
  pagination={{ clickable: true }}
//   scrollbar={{ draggable: true }}
  className="h-47 w-[1580px] mt-7 text-black text-center content-center"
>
      {
        catog.categories.map((obj,index)=>{
          return <SwiperSlide 
          key={index} className='border-2 rounded border-gray-500 bg-gray-800'>
        <Button className='flex flex-col bg-pink-900' onClick={()=>navigate(`/category?name=${obj.name}`)}>
          <img src={obj.image} alt={obj.name} />
          <p className='!text-bold !text-xl'>{obj.name}</p>
        </Button>
      </SwiperSlide>;
        }
        )
      }
    </Swiper>
  )
}

export default HomeCatSlider
