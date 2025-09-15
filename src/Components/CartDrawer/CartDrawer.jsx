import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { RiCloseLargeFill } from "react-icons/ri";
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CartDrawer = (props) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const getCartItems = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart/CartDetails`, {
        withCredentials: true
      });

      if (res.data.success) {
        console.log(res.data.cartData);
        setCart(res.data.cartData);
      }
    } catch (error) {
      if (error.response) {
        console.log("Error status while fetching Cart Items :: ", error.response.status);
        console.log("Error message while fetching Cart Items :: ", error.response.data.message);
      } else {
        console.log("No response from server to getCartItems");
      }
    }
  }

  const handleDeleteCartItem = async (product) => {
    console.log("handleDeleteCartItem is gonna delete", product);
    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/RemoveCartItem`, { product }, {
        withCredentials: true
      });

      if (res.data.success) {
        console.log(res.data.cartData);
        setCart(res.data.cartData);
      }

    } catch (error) {
      if (error.response) {
        console.log("Error status while deleting Cart Item :: ", error.response.status);
        console.log("Error message while deleting Cart Item :: ", error.response.data.message);
      } else {
        console.log("No response from server to getCartItems");
      }
    }
  }


  const grandTotal = Array.isArray(cart)
    ? cart.reduce((total, item) => {
      return total + (item.product?.price * (1 - (item.product?.discount || 0) / 100)) * (item.Quantity || 0);
    }, 0)
    : 0;


  useEffect(() => {
    getCartItems();
    console.log("CartDrawer Effect");
  }, [props.cartOpen, grandTotal])

  const DrawerList = (
    <Box sx={{ width: 490 }} className="bg-gray-900 text-white h-full" role="presentation">
      <div className='text-center pt-6 flex justify-center text-purple-700 !font-bold items-center text-3xl px-4 py-3 rounded-lg'>
        <div className='mr-8 '>Cart Items</div>
        <RiCloseLargeFill className="bg-amber-50 text-red-700 text-3xl p-0.5 hover:p-1" onClick={() => props.setCartOpen(false)} />    </div>
      <List>
        {cart.length > 0 && cart.map((prod, index) => (
          <div
            key={index}
            className='flex space-x-9 border-1 border-gray-600 rounded-lg h-50 p-3 mx-2 my-1'>
            <div><img
              className='h-45 rounded'
              src={cart.length > 0 ? prod.product.displayImage : "https://www.jiomart.com//images/product/original/491321586/amul-masti-dahi-200-g-cup-product-images-o491321586-p590032908-0-202203170612.jpg?im=Resize=(280,280)"}
              alt={prod.product.name} /></div>
            <div>
              <h1>Name of product</h1>
              <h2>{prod.product.name}</h2>
              <p>Category:{prod.product.category}</p>
              <p>Quantiy:{prod.Quantity}</p>
              <p>Price(per item):{prod.product.price}</p>
              <p>Total Price:{(prod.product.price) * (prod.Quantity)}</p>
            </div>
            <div>
              <Button
                onClick={() => handleDeleteCartItem(prod.product._id)}
                className='!text-3xl !bg-gray-700 !mt-1 !ml-4 !text-white'><MdDelete /></Button>
            </div>
          </div>
        )
        )}
      </List>
      <div className='border  border-gray-600 h-Full mx-5 my-2 rounded-xl p-2 py-4'>
        <h1 className='text-center text-2xl font-black'>Cart Total</h1>
        <div className='flex flex-col space-y-4 justify-between mx-14'>
          <div className='flex text-lg  border mt-3 text-blue-500 font-bold justify-around'>
            <div className='w-27 border-r'>Item name</div>
            <div className='w-27 border-r'>Quantity</div>
            <div>Subtotal</div>
          </div>
          {
            cart.map((prod, index) => {
              return <div  className='flex  border justify-around'>
                <div className='w-27'>{prod.product.name}</div>
                <div className='w-27'>(x{prod.Quantity})</div>
                <div>{(prod.product.price) * (prod.Quantity)}</div>
              </div>
            })
          }
          <div className='mx-6'>
            <div>Grand Total: {grandTotal.toFixed(2)}</div>
          </div>
          <div className='mx-6'>
            <Button
              onClick={() => { navigate("/Check-Out"); props.setCartOpen(false) }}
              className='!text-2xl !bg-blue-800 !text-gray-300 !font-semibold !border'>Place Order</Button>
          </div>
        </div>
        <div>
        </div>
      </div>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={props.cartOpen} onClose={() => props.setCartOpen(false)} anchor={"right"}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CartDrawer
