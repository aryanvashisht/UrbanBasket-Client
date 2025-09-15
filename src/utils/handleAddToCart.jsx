import axios from "axios";

export default async function handleAddToCart(productDetails) {


    const { product, Quantity } = productDetails;
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/cart/AddToCart`, {
            product,
            Quantity
        }, {
            withCredentials: true
        });

        if (res.data.success) {
            console.log(res.data.message);
            console.log(res.data.cartData);
        }

    } catch (error) {
        if (error.response) {
            console.log("Error status while fetching All Products ::", error.response.status);
            console.log("Error message while fetching All Products ::", error.response.data.message);
        } else {
            console.log("No response from server in handleAddToCart :: ",error.message);
        }
    }
}
