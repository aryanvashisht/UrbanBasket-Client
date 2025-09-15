import { useSelector } from 'react-redux'
import ProductBrief from '../Product/ProductBrief'

function TopPicksTemp(props) {
  const product = useSelector(state=>state.products)
  return (
    <div className='justify-center w-[90%] mx-auto'>
        <h1 className='text-5xl my-4 underline'>Top Picks For {props.for}</h1>
      <div className='flex'>
        <ProductBrief />
        <ProductBrief />
        <ProductBrief />
        <ProductBrief />
        <ProductBrief />
      </div>
     </div>
  )
}

export default TopPicksTemp
