import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ProductBrief from '../../Product/ProductBrief';

const Sidebar = () => {
  return (
    <div>
      <section className="py-8 ml-9 flex">
        <div className="flex gap-3 h-177 border rounded-2xl w-[44%] justify-around mr-14">
          <div className=" h-full flex flex-col items-center justify-center">
            <FormGroup className='ml-2'>
              {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" value={"label"}/> */}
              <h1 className='ml-4 p-4 text-2xl'>Select Category</h1>
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Required" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Required" />
            </FormGroup>

            <div className='border border-gray-400 w-full mt-9 '></div>


            <FormGroup className='ml-2'>
              {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" value={"label"}/> */}
              <h1 className='ml-4 p-4 text-2xl'>Filter By Rating</h1>
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Required" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
              <FormControlLabel Controlled control={<Checkbox sx={{
                color: 'white', // unchecked color
                '&.Mui-checked': {
                  color: 'white', // checked color
                },
              }} />} label="Controlled" />
            </FormGroup>
          </div>
        </div>
        <div className='flex flex-wrap gap-6'>
          <div className='w-[93%] flex justify-around items-center h-14 text-xl rounded-xl border-white bg-gray-800'>
            <p className='mr-[17%]'>There are { } Products</p>
            <p className='text-green-400 font-bold'>Discount upto 40%</p>
          </div>
          <ProductBrief />
          <ProductBrief />
          <ProductBrief />
          <ProductBrief />
          <ProductBrief />
          <ProductBrief />
          <ProductBrief />
          <ProductBrief />
        </div>
      </section>
      <div className='border mx-5 border-gray-600'></div>
    </div>
  )
}

export default Sidebar
