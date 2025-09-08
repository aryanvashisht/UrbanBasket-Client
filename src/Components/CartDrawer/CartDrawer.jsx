import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { RiCloseLargeFill } from "react-icons/ri";
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const CartDrawer = (props) => {
  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 490 }} className="bg-gray-800 text-white h-fit" role="presentation">
      <div className='text-center pt-6 flex justify-center text-purple-700 !font-bold items-center text-3xl px-4 py-3 rounded-lg'>
        <div className='mr-8'>Cart Items</div>
        <RiCloseLargeFill onClick={() => props.setCartOpen(false)} />    </div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          // <ListItem className="flex border h-50 m-2" key={text} disablePadding>
          //   <ListItemButton className='!text-center'>

          //     <ListItemText primary={text} />
          //   </ListItemButton>
          // </ListItem>
          <div className='flex space-x-9 border h-50 p-3 mx-2 my-1 rounded-lg'>
            <div><img
              className='h-45 rounded'
              src="https://www.jiomart.com//images/product/original/491321586/amul-masti-dahi-200-g-cup-product-images-o491321586-p590032908-0-202203170612.jpg?im=Resize=(280,280)"
              alt="Amul dahi" /></div>
            <div>
              <br />
              <h1>Name of product</h1>
              <h2>name-of-product</h2>
              <p>Category:</p>
              <p>Quantiy:</p>
              <p>Price(per item):</p>
              <p>Total Price:</p>
            </div>
            <div>
              <Button 
              className='!text-3xl !bg-gray-700 !mt-1 !ml-4 !text-white'><MdDelete/></Button>
            </div>
          </div>
        )
        )}
      </List>
      <div className='border h-Full mx-5 my-2 rounded-xl p-2'>
        <h1 className='text-center text-2xl'>Cart Total</h1>
        <div className='flex flex-col space-y-4 justify-between mx-14'>
          <div className='flex text-lg mt-3 text-blue-600 font-bold justify-around'>
            <div>Item name</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          <div className='flex justify-around'>
            <div>Item name</div>
            <div>(Quant:4)</div>
            <div>Subtotal:</div>
          </div>
          <div className='flex justify-around'>
            <div>Item name</div>
            <div>(Quant:4)</div>
            <div>Subtotal:</div>
          </div>
          <div className='flex justify-around'>
            <div>Item name</div>
            <div>(Quant:4)</div>
            <div>Subtotal:</div>
          </div>
          <div className='mx-6'>
            <div>Grand Total:</div>
          </div>
          <div className='mx-6'>
            <Button onClick={()=>{navigate("/Check-Out"); props.setCartOpen(false)}} className='!text-2xl !bg-blue-800 !text-gray-300 !font-semibold !border'>Place Order</Button>
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
