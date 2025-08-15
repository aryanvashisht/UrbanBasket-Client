import Button from "@mui/material/Button"

const ProductList = () => {
  return (
    <div className="text-center my-3">
            <h1 className="text-6xl text-start ml-[18%]">Latest Products</h1>
            <p className="text-xl mt-1 mb-3 text-start ml-[18%]">Check Out latest Products in the collection</p>
            <Button>
                <img 
                 className="w-99 h-63 !border-2 !border-white"
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1755184054_ColdDrinksandSnacks_HPMC.jpg?im=Resize=(768,448)" alt="" srcset="" />
            </Button>
            <Button>
                <img 
                className="w-99 h-63 !border-2 !border-white"
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1755184246_McCains-and-Ice-Cream_HPMC.jpg?im=Resize=(768,448)" alt="" srcset="" />
            </Button>
            <Button>
                <img 
                className="w-99 h-63 !border-2 !border-white"
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1755184054_ColdDrinksandSnacks_HPMC.jpg?im=Resize=(768,448)" alt="" srcset="" />
            </Button>
      
    </div>
  )
}

export default ProductList
