import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CheckOut() {
  
  const navigate = useNavigate()

  return (
    <div className="bg-gray-700 min-h-[70vh] flex justify-around items-center">
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
          <div className='text-center text-xl'>Your Order</div>
          <div className='flex flex-col space-y-4 justify-between mx-14'>
            <div className='flex text-lg mt-3 text-blue-100 space-x-9 font-bold justify-around'>
              <div>Item name</div>
              <div>Quant.</div>
              <div>Subtotal</div>
            </div>
            <div className='flex justify-around'>
              <div>Laptop Bag</div>
              <div>{"9"}</div>
              <div>Rs.{780}</div>
            </div>
            <div className='flex justify-around'>
              <div>Item name</div>
              <div>7</div>
              <div>Rs.{780}</div>
            </div>
            <div className='flex justify-around'>
              <div>Item name</div>
              <div>7</div>
              <div>Rs.{780}</div>
            </div>
            <div className='mx-6 space-x-8'>
              <span>Grand Total:</span><span>{780 * 4}</span>
            </div>
            <div className='mx-6'>
              <Button onClick={() => navigate("/Payment") } 
              className='!text-2xl !bg-blue-800 !text-gray-300 !font-semibold !border'>Place Order</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
