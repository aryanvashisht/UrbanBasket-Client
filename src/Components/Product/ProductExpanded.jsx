import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import handleAddToCart from "../../utils/handleAddToCart";

const ProductExpanded = () => {
  const [product, setProduct] = useState();
  const [cartActive, setCartActive] = useState(false);
  const [cartQuant, setCartQuant] = useState(1);
  const { id } = useParams();

  const productExpanded = async () => {
    console.log("productExpanded");

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/getProductDetails/${id}`)
      console.log(`${import.meta.env.VITE_API_URL}/products/${id}`);
      
      if (res.data.success) {
        setProduct(res.data.product)
      }
    } catch (error) {
      if (error.response) {
        console.log("Error status while fetching All Products ::", error.response.status);
        console.log("Error message while fetching All Products ::", error.response.data.message);
      } else {
        console.log("No response from server");
      }
    }
  }

  useEffect(() => {
    productExpanded();
  }, [])

  const handleCart = () => {
    console.log(product[0]._id);

    handleAddToCart({ Quantity: cartQuant, _id: product[0]._id });
    
    setTimeout(() => {
      setCartActive(false)
      setCartQuant(1)
    }, 500);
  }

  return (
    <div className="flex flex-col lg:flex-row mx-auto my-9 w-[90%] lg:w-[80%] gap-8">
      {/* Product Image */}
      <img
        className="rounded-md w-80 h-100 p-3 border lg:w-1/2 object-cover"
        src={product ? product[0].displayimage : "MensWomenHanger.jpeg"}
        alt="Product"
      />

      {/* Product Details */}
      <div className="border rounded-3xl p-6 w-full lg:w-1/2 flex flex-col justify-between">
        {

          product ?
            <div className="space-y-4 overflow-y-auto max-h-[500px]"> <h1 className="text-4xl font-semibold">{`Product Name : ${product[0].name}`}</h1>
              <p className="text-2xl font-medium text-gray-700">
                <span>{`Price: `}<span className="line-through">₹{product[0].price}</span><span>&nbsp;₹{(product[0].price) - ((product[0].price) * (product[0].discount / 100))}</span></span>
              </p>
              <p>Discount: {product[0].discount}%</p>
              {product[0].available > 1 ? (
                <p className="text-green-600">In Stock</p>
              ) : (
                <p className="text-red-600">Out of Stock</p>
              )}

              <p className="text-xl text-yellow-500">{`Rating: ★★★★☆`}</p>
              <p className="text-sm text-gray-600">
                Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vero, eligendi labore optio tempora enim beatae doloribus aspernatur
                quam officiis delectus illum possimus cum, reiciendis iste accusamus
                aperiam consectetur asperiores consequatur. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. {/* Add more text if needed */}
              </p>
            </div> :
            <div className="space-y-4 overflow-y-auto max-h-[500px]"> <h1 className="text-4xl font-semibold">{`Product Name :`}</h1>
              <p className="text-2xl font-medium text-gray-700">{`Price: ₹XXXX`}</p>
              <p className="text-xl text-yellow-500">{`Rating: ★★★★☆`}</p>
              <p className="text-sm text-gray-600">
                Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vero, eligendi labore optio tempora enim beatae doloribus aspernatur
                quam officiis delectus illum possimus cum, reiciendis iste accusamus
                aperiam consectetur asperiores consequatur. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. {/* Add more text if needed */}
              </p>
            </div>
        }


        {/* Add to Cart Button */}
        {
          cartActive ?
            <div className='flex justify-center'>
              <input
                // defaultValue={1}
                name="quant"
                max={product[0].available || 1}
                min={1}
                value={cartQuant}
                onChange={(e) => setCartQuant(Number(e.target.value))}
                onKeyDown={(e) => e.preventDefault()}
                type="number"
                className="border rounded-2xl w-20 h-8 p-4 py-7 my-2 text-center 
                           border-violet-400 focus:border-violet-600 
                           focus:ring-1 focus:ring-violet-600 outline-none"
              />
              <button
                onClick={handleCart}
                className='cursor-pointer border px-4 rounded text-violet-600 my-1 font-semibold ml-2 text-5xl'><TiTick /></button>
            </div>
            : <Button
              onClick={() => setCartActive(true)}
              className="!text-xl lg:!text-2xl w-full !mt-4 !border !py-3 !rounded-xl"
              variant="outlined"
            >
              Add to Cart
            </Button>
        }
      </div>
    </div >
  );
};

export default ProductExpanded;
