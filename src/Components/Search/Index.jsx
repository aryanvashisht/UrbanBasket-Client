import Button from '@mui/material/Button';
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-gray-800 rounded relative p-2'>
      <input type="text" placeholder='Search for products...' className='w-full h-8 focus:outline-none bg-inherit text-white p-2'/>
      <Button className='absolute left-187 bottom-6.5'><FiSearch/></Button>

    </div>
  )
}

export default Search
