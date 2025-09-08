import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
    <div className="bg-gray-800 flex h-24 justify-between rounded-b-lg items-center px-9">
      <div className="flex items-center">
        <img
          className="w-30 ml-3"
          src="/LogoForUrbanBasket.png" alt="Logo" srcset="" />

        <span>Admin Panel</span>
      </div>

      <NavLink to={"/admin/addproduct"} className={({isActive}) => isActive ? "font-semibold text-blue-500" : "font-semibold "}>Add Product</NavLink>
      <NavLink to={"/admin/allproducts"} className={({isActive}) => isActive ? "font-semibold text-blue-500" : "font-semibold"}>All Products</NavLink>
      <NavLink to={"/admin/allorders"} className={({isActive}) => isActive ? "font-semibold text-blue-500" : "font-semibold"}>All Orders</NavLink>

      <Link to={"/"} className="border p-4 rounded-lg hover:bg-gray-900">
        Get back to User panel
      </Link>

    </div>
  )
}

export default Header
