import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import ProductExpanded from './Components/Product/ProductExpanded'
import Login from './Components/Pages/Login/Login'
import SignUp from './Components/Pages/SignUp/SignUp'
import Layout from './Components/Layout/Layout'
import ProductByCategory from './Components/Pages/ProductByCategory/ProductByCategory'
import LatestProducts from './Components/LatestProd/LatestProducts'
import { store } from './app/store'
import { Provider } from 'react-redux'
import CheckOut from './Components/Pages/CheckOut/CheckOut'
import Orders from './Components/Pages/Orders/Orders'
import AddProduct from './Components/Admin/AdminPages/AddProduct'
import AllProducts from './Components/Admin/AdminPages/AllProducts'
import AllOrders from './Components/Admin/AdminPages/AllOrders'
import EditOrderStatus from './Components/Admin/AdminPages/AllOrders'

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='' element={<Home />}/>
        <Route path='/category' element={<ProductByCategory />}/>
        <Route path='/help-center' element={<LatestProducts />}/>
        <Route path='/order-details' element={<Orders />}/>
        <Route path='/product/:id' element={<ProductExpanded />}/> 
        <Route path='/Check-Out' element={<CheckOut />}/> 
        <Route path='/Orders' element={<Orders />}/> 
        </Route>

        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp />}/>

        <Route path='/Admin/addproduct' element={<AddProduct />}/>
        <Route path='/Admin/allproducts' element={<AllProducts />}/>
        <Route path='/Admin/allorders' element={<AllOrders />}/>
        </Routes>
        
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
