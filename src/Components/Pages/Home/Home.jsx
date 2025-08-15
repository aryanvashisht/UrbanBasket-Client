import { CiDeliveryTruck } from 'react-icons/ci'
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts'
import HomeCatSlider from '../../HomeCatSlider/HomeCatSlider'
import HomeSlider from '../../HomeSlider/HomeSlider'
import LatestProducts from '../../LatestProd/LatestProducts'
import HomeNavigation from '../../HomeNavigation/HomeNavigation'
import ProductsSlider from '../../Products/ProductsSlider'
import DiscountSlider from '../../DiscountSection/DiscountSlider'
import TopPicksTemp from '../../Top-picks/TopPicksTemp'

function Home() {
  return (
    <div>
      <HomeSlider/>
      <HomeCatSlider/>
      <br />
      <HomeNavigation/>
      <ProductsSlider/>
      
      <FeaturedProducts/>
      <LatestProducts/>
      <div className='flex justify-between p-1 border-2 border-purple-400 shadow w-[80%] my-9 h-30 rounded-md mx-auto'>
<div className='content-center font-extralight flex'>
  <CiDeliveryTruck className='text-8xl ml-3'/>
  <div className='text-4xl content-center ml-3 mb-3'>FREE SHIPPING</div>
  </div>
<div className='content-center'>Free Delivery Now On Your First Order and over Rs.200</div>
<div className='text-5xl mt-2'>- Rs. 200*</div>
      </div>
      <DiscountSlider/>
      <TopPicksTemp for="Milk"/>
    </div>
  )
}

export default Home
