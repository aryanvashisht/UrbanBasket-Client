import { Link, useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { GrUserAdmin } from "react-icons/gr";
import { FiShoppingCart } from 'react-icons/fi';
import { IoGitCompareSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Tooltip from '@mui/material/Tooltip';
import Navigation from '../Navigation';
import Search from "../Search/Index";
import CartDrawer from "../CartDrawer/CartDrawer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logoutUser } from "../../features/CartOperations/userSlice";

function Header() {
  const [openCart, setOpenCart] = useState(false);
  const userState = useSelector((state) => state.userOperations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  const handleLogOut = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/logout`, {}, { withCredentials: true });
      console.log(res.data.url)
      console.log(res.data.message);

      if (res.data.success) {
        dispatch(logoutUser())
      }

    } catch (error) {
      if (error.response) {
        console.log("Error status while logging in::", error.response.status);
        console.log("Error message while logging in::", error.response.data.message);
      } else {
        console.log("No response from server");
      }
    }
  }

  function handleCartDrawer() {
    setOpenCart(true);
    console.log("handleCart");
  }

  return (
    <header>
      <div className="top-strip bg-pink-900 border-t border-b">
        <div className="container">
          <div className="flex items-center justify-between pl-80">

            <div className='col1 w-[50%] text-sm font-semibold'>
              <p>Get upto 50% off, limited time offer.</p>
            </div>

            <div className='col2 flex items-center'>
              <ul className='flex justify-between gap-x-9'>
                <li>
                  <Link to="/help-center" className='text-[12px] link transition '>Help Center</Link>
                </li>
                <li>
                  <Link to="/Order-details" className='text-[12px] link transition'>Order Details</Link>
                </li>
              </ul>
            </div>

          </div>


        </div>
      </div>

      <div className='header bg-gray-900 text-purple-300 border-b border-pink-900 font-semibold py-1.5'>
        <div className=' flex justify-between items-center'>
          <div className='col1  content-center pl-9'>
            <Link to={"/"} className='flex justify-center pr-19'><img className='w-37 h-39' src='LogoForUrbanBasket.png' /></Link>
          </div>

          <div className='col2 w-[45%]'><Search /></div>

          <div className='col3  flex items-center pl-11 ml-9 flex-wrap mr-[4%]'>

            <ul className='flex items-center gap-9 justify-between'>
              {userState.user ?
                <div
                  onClick={handleLogOut}
                  className="pr-10 cursor-pointer">
                  <span className="text-2xl">Logout</span>
                </div>
                :
                <li className='list-none'>
                  <Link to="/Login" className='link transition text-xl'>Login</Link>&nbsp;/&nbsp;
                  <Link to="/SignUp" className='link transition text-xl'>Register</Link>
                </li>}

              <li>
                <button onClick={()=>navigate("/admin/addproduct")}>
                   <Tooltip title="Admin Panel">
                      <GrUserAdmin className="text-3xl" />
                  </Tooltip>
                </button>
              </li>

              <li>
                <Link to={"/Orders"}>
                  <Tooltip title="orders">
                    <TbTruckDelivery className="text-3xl"/>
                  </Tooltip>
                </Link>
              </li>

              <li>

                <Tooltip onClick={handleCartDrawer} title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={0} color="secondary">
                      < FiShoppingCart className="icon-white" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <CartDrawer cartOpen={openCart} setCartOpen={setOpenCart} />
      <Navigation />
    </header>
  )
}

export default Header
