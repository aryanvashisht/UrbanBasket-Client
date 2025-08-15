import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'

const ProductBrief = (props) => {
  return (
    <div>
       <Link
            to={`/product/${"index" + 1}`} // Dynamic route for each product
            className="p-0 flex flex-col w-86 h-129 rounded-lg content-center border bg-transparent text-white"
          >
      <img
              src={"LavenderChainiPhoneCase.jpeg"}
              alt={`Slide ${"no."}`}
              className=" mx-3 mt-2 h-76 object-cover rounded-t"
            />
            <div className="p-1 text-lg text-center bg-black bg-opacity-60 w-full rounded-b">
              Product {3 + 1}
            </div>
            <div className="pl-4 text-md bg-black bg-opacity-60 w-full rounded-b">
              Price  ₹{3*100 - 1}
            </div>
            <div className="pl-4 text-md bg-black bg-opacity-60 w-full rounded-b">
              Discount {3 + 1}
            </div>
            <Box sx={{ '& > legend': { mt: 2 } }}>

      <Rating className="ml-3 p-2 mt-1 mb-2" name="read-only" value={3} readOnly />
    </Box>
    <Button className='!border !mx-4'>
      Add to cart
    </Button>
          </Link>
    </div>
  )
}

export default ProductBrief