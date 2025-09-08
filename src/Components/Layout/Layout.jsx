import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../features/Products/ProductsSlice'
import { toast, ToastContainer } from 'react-toastify'
import { setUser } from '../../features/CartOperations/userSlice'

const Layout = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/allProducts`)
      console.log(res.data);

      if (res.data) {
        dispatch(setProducts(res.data.Products))
        console.log(res.data.Products);
      }
    } catch (error) {
      if (error.response) {
        console.log("Error status while fetching All Products ::", error.response.status);
        console.log("Error message while fetching All Products ::", error.response.data.message);
      } else {
        console.log("No response from server");
      }
    }
  }

  const authVerify = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/personal`, {}, {
        withCredentials: true
      });

      console.log(res.data);

      if (res.data.success) {
        console.log("User is already logged in and is verified")
        console.log(res.data.user);
        dispatch(setUser(res.data.user))
      }

    } catch (error) {
      if (error.response) {
        console.log("Error status authVerify ::", error.response.status);
        console.log("Error message authVerify ::", error.response.data.message);
      } else {
        console.log("No response from server :: ",error.message);
      }
    }
  }

  useEffect(() => {
    getProducts();
    authVerify();
  }, [])

  const notify = () => toast.success('Success!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <div>
      <Header />

      <button onClick={notify}>Notify!</button>

      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
