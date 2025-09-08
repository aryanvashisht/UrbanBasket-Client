import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

// Tabs at Home
function HomeNavigation() {
  const [value, setValue] = useState("TodaysDeal");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{console.log(value)
  },[value])

  return (
    <div className='flex justify-around pt-3'>
      <div className=''>
        <div className='text-5xl ml-3'>Popular Products</div>
        <div className='ml-4 my-2 text-lg'>Do not miss the exclusive offers.</div>
      </div>
      <div>
        <Box sx={{ borderBottom: 1,
           borderColor: 'ActiveBorder',
            '& .MuiTab-root': { color: 'white' },
            '& .Mui-selected': { color: '#1976d2 !important' },  
             }}>
          <Tabs className="!text-white" 
          value={value} 
          onChange={handleChange} 
          aria-label="Popular Products tab">
            <Tab label="Today's deals" value={"TodaysDeal"} />
            <Tab label="Men" value={"Men"}/>
            <Tab label="Women" value={"Women"}/>
            <Tab label="Watches" value={"Watches"}/>
            <Tab label="Shoes" value={"Shoes"}/>
            <Tab label="Stationary" value={"Stationary"}/>
            <Tab label="Bags" value={"Bags"}/>
          </Tabs>
        </Box>
      </div>
    </div>
  )
}

export default HomeNavigation
