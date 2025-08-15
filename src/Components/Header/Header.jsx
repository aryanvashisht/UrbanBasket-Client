import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FiShoppingCart } from 'react-icons/fi';
import { IoGitCompareSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from '../Navigation';
import Search from "../Search/Index";

function Header() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <header>
      
      <div className="top-strip bg-pink-900 border-t border-b">
        <div className="container">
          <div className="flex items-center justify-evenly pl-80">

            <div className='col1 w-[50%] text-sm font-semibold'>
              <p>Get upto 50% off, limited time offer.</p>
            </div>

            <div className='col2 flex items-center'>
              <ul className='flex justify-between gap-x-4'>
                <li>
                  <Link to="/help-center" className='text-[12px] link transition '>Help Center</Link>
                </li>
                <li>
                  <Link to="/Order-details" className='text-[12px] link transition'>Order Details</Link>
                </li>
                <li>
                  <Link to="/Order-details" className='text-[12px] link transition'>Help Center</Link>
                </li>
                <li>
                  <Link to="/Order-details" className='text-[12px] link transition'>Help Center</Link>
                </li>
              </ul>
            </div>

          </div>


        </div>
      </div>

      <div className='header bg-purple-300 text-pink-500 border-b border-pink-900 font-semibold py-1.5'>
        <div className='container flex items-center justify-between'>
          <div className='col1 w-[30%] pl-9'>
            <Link to={"/"} className='flex justify-center pr-19'><img className='w-17' src='mainlogo.png' /></Link>
          </div>
          <div className='col2 w-[45%]'><Search/></div>

          <div className='col3 w-[25%] flex items-center pl-11 flex-wrap'>
            
            <ul className='flex items-center gap-3 justify-end'>
              <li className='list-none'>
                <Link to="/Login" className='link transition text-xl'>Login</Link> &nbsp;
                <Link to="/Register" className='link transition text-xl'>Register</Link>
              </li>

              <li>
                <Tooltip title="Compare">
                <IconButton aria-label="Compare">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoGitCompareSharp />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                <IconButton aria-label="heart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    < FiShoppingCart/>
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <Navigation/>
    </header>
  )
}

export default Header
