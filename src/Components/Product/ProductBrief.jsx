import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TiTick } from "react-icons/ti";

const ProductBrief = (props) => {
  const navigate = useNavigate();

  function handleAddToCart(Id) {
    props.setActiveCartId(Id);
  }

  return (
    <div>
      <div
        // Dynamic route for each product
        className="p-0 flex flex-col w-86 h-138 rounded-lg content-center border bg-transparent text-white"
      >
        <img
          src={props.image || "LavenderChainiPhoneCase.jpeg"}
          alt={`Slide ${"no."}`}
          className="mx-3 mt-2 h-76 object-cover rounded-t"
        />
        <div className="p-1 text-xl font-black text-center bg-black bg-opacity-60 w-full rounded-b">
          {props.name || "product-name"}
        </div>
        <div className="pl-4 text-md bg-black bg-opacity-60 w-full rounded-b">
          Price  ₹{props.price || " ###"}
        </div>
        <div className="pl-4 text-md bg-black bg-opacity-60 w-full rounded-b">
          Discount {props.discount || " #"}
        </div>
        <Box sx={{ '& > legend': { mt: 2 } }}>

          <Rating className="ml-3 p-2 mt-1 mb-2" name="read-only" value={props.rating || 4} readOnly />
        </Box>
        {
          props.activeCartId === props.Id ? <div className='flex justify-center'>
            <input
              defaultValue={1}
              max={props.available || 1}
              min={1}
              onKeyDown={(e) => e.preventDefault()}
              type="number"
              className="border rounded-2xl w-20 h-8 p-4 my-2 text-center 
                 border-violet-400 focus:border-violet-600 
                 focus:ring-1 focus:ring-violet-600 outline-none"
            />
            <button 
            // onClick={handleCart}
            className='cursor-pointer border px-2 rounded text-violet-600 my-1 font-semibold ml-2 text-4xl'><TiTick /></button>
          </div> : <Button
            onClick={() => handleAddToCart(props.Id)}
            className='!border !mx-4 !mb-2'>
            Add to cart
          </Button>
        }
        <Button
          onClick={() => navigate(`/product/${props.Id}`)}
          className='!border !mx-4'>
          View
        </Button>
      </div>
    </div>
  )
}

export default ProductBrief