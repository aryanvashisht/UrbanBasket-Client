import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

function CheckOut() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


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

  const handlePayment = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/payment/order`, { amount: grandTotal }, {
        withCredentials: true
      })

      console.log(res.data);
      if (res.data.success) {
        console.log('Payment Data:', res.data.data);

        handlePaymentVerify(res.data.data);
        
      }

    } catch (error) {
      console.log("Error while making payment :: ", error);

    }
  }

  const handleCheckOut = async () => {
    console.log("handleCheckOut");

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/order/AddOrder`, {}, {
        withCredentials: true
      })
      console.log(res.data);

      if (res.data.success) {
        console.log(res.data.cartData);
        console.log(res.data.orders);
        toast.success(res.data.message);
        getCartItems()
      }

    } catch (error) {
      console.log("Error status authVerify ::", error.response.status);
      console.log("Error in handling Check Out :: ", error.response?.message || 'Failed to Check Out');
    }
  }

  const handlePaymentVerify = async (data) => {
    console.log(data);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "User 1",
      description: "Testing",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const res = await axios.post(`${import.meta.env.VITE_API_URL}/payment/verify`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          }, {
            withCredentials: true
          })

          if (res.data.success) {
            toast.success(res.data.message)
            console.log(res.data);
            toast.info("Order Placed!");

            handleCheckOut();

          }

        } catch (error) {
          console.log("Error in verifying payment", error);
          toast.info("Server error in verifying payment!")
        }
      },
      theme: {
        color: "#5f63b8"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  const grandTotal = Array.isArray(cart)
    ? cart.reduce((total, item) => {
      return total + (item.product?.price * (1 - (item.product?.discount || 0) / 100)) * (item.Quantity || 0);
    }, 0)
    : 0;

  useEffect(() => {
    getCartItems()
  }, [])

  return (
    <div className="bg-gray-700 min-h-[70vh] flex justify-around items-center">
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          fontFamily: "'Segoe UI', Roboto, sans-serif",
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
        toastStyle={{
          borderRadius: '12px',
          fontWeight: 500,
          padding: '16px 22px',
          fontSize: '15px',
          lineHeight: '1.5',
          background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
          color: 'white',
          boxShadow: '0 4px 15px rgba(67, 206, 162, 0.4)',
        }}
        progressStyle={{
          background: 'linear-gradient(90deg, #43iea2 0%, #1859d 100%)',
          height: '4px',
          borderRadius: '0 0 12px 12px',
        }}
        bodyStyle={{
          padding: '16px 20px',
          fontSize: '14px',
          lineHeight: '1.4',
        }}
      />
      <div className="bg-gray-900 w-[60%] border p-6 rounded-xl shadow-lg">
        <h2 className="text-white text-2xl font-semibold mb-4">
          Billing Address
        </h2>

        <Box
          component="form"
          sx={{
            '& .MuiInputBase-root': { color: 'white' }, // text color
            '& .MuiInputLabel-root': { color: '#bbb' }, // label color
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#888',
            }, // border color
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="addressline1"
            label="Address Line 1"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="addressline2"
            label="Address Line 2"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="city"
            className='!w-[30%]'
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            className='!ml-6 !w-[33%]'
            id="state"
            label="State"
            variant="outlined"
            margin="normal"
          />
          <TextField
            className='!ml-6 !w-[32%]'
            id="Country"
            label="Country"
            variant="outlined"
            margin="normal"
          />
          <TextField
            className='!w-[30%]'
            id="zipcode"
            label="Zip Code"
            variant="outlined"
            margin="normal"
          />
          <TextField
            className='!ml-[2%] !w-[30%]'
            id="PhoneNo"
            label="Phone No."
            variant="outlined"
            margin="normal"
          />
          <Button />
        </Box>
      </div>

      <div className='scroll border p-4 max-h-204 overflow-y-auto'>
        <div className='border p-4'>
          <div className='text-center text-xl font-bold'>Your Order</div>
        {
          grandTotal ? 
          <div className='flex flex-col space-y-4 justify-between mx-14'>
            <div className='flex text-lg mt-3 text-blue-100 space-x-9 font-bold justify-around'>
              <div>Item name</div>
              <div>Quant.</div>
              <div>Subtotal</div>
            </div>
            {
              cart.map((element, index) =>
                <div className='flex justify-around'>
                  <div>{element.product.name}</div>
                  <div>x{element.Quantity}</div>
                  <div>Rs.{(element.product.price) * (element.Quantity)}</div>
                </div>
              )
            }
            <div className='mx-6 space-x-8'>
              <span>Grand Total:</span><span>{grandTotal}</span>
            </div>
            <div className='mx-6'>
              <Button
                onClick={handlePayment}
                className='!text-2xl !bg-blue-800 !text-gray-300 !font-semibold !border'>PAY AND PROCEED</Button>
            </div>
          </div>
       
        :
        <div className='w-90 h-40 text-center content-center'>
<div className='font-black text-3xl p-2'>
  No Items in Cart
</div>
<div>
  Nothing to Order
</div>
        </div>
        }
         </div>
      </div>
    </div>
  )
}

export default CheckOut
