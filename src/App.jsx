import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import AdsBannerSlider from './Components/AdsBannerSlider/AdsBannerSlider'
import HomeNavigation from './Components/HomeNavigation/HomeNavigation'
import ProductsSlider from './Components/Products/ProductsSlider'
import Footer from './Components/Footer/Footer'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
import DiscountSlider from './Components/DiscountSection/DiscountSlider'
import LatestProducts from './Components/LatestProd/LatestProducts'
import ProductBrief from './Components/Product/ProductBrief'
import ProductList from './Components/ProductList/ProductList'
import FeaturedSlider from './Components/FeaturedProducts/Slider/FeaturedSlider'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <BrowserRouter>

    <Header />
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/new' element={<Sidebar />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
