import Button from "@mui/material/Button";
import { IoIosRocket } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

function Navigation() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) =>()=> {
        setOpen(newOpen);
        console.log("click");
    };

    return (
        <div className='bg-gray-900 border rounded border-gray-500 flex justify-between py-2'>
            <div className='flex justify-center w-[30%]'>
                <Button 
                onClick={toggleDrawer(true)}
                className="!text-white hover:!text-black font-bold !text-[14px]"><RiMenu2Line className="!font-bold !text-2xl mx-2" />
                    SHOP BY CATEGORIES<FaAngleDown className="text-2xl mx-2.5"/></Button>
            </div>

            <div className="flex justify-center w-[45%] mt-1.5 content-center">
                <Button className="text-xl link transition"><Link to={"/"}>Home</Link>&nbsp;|&nbsp;</Button>
                <Button className="text-xl link transition"><Link to={"/Category?name=Fashion"}>Fashion</Link>&nbsp;|&nbsp;</Button>
                <Button className="text-xl link transition"><Link to={"/Category?name=Electronics"}>Electronics</Link>&nbsp;|&nbsp;</Button>
                <Button className="text-xl link transition"><Link to={"/Category?name=Watches"}>Watches</Link>&nbsp;|&nbsp;</Button>
                <Button className="text-xl link transition"><Link to={"/Category?name=Footwear"}>Footwear</Link>&nbsp;|&nbsp;</Button>
                <Button className="text-xl link transition"><Link to={"/Category?name=Groceries"}>Groceries</Link>&nbsp;|&nbsp;</Button>
                <Button className="text-xl link transition"><Link to={"/Category?name=Accessories"}>Accessories</Link>&nbsp;|&nbsp;</Button>
            </div>

            <div className="flex justify-center  mt-2 w-[25%] cursor-default">
                <IoIosRocket className="text-xl mx-1 mt-0.5" />
                <p>Free International Delivery</p>
            </div>

            <CategoryPanel isCategoryPanelOpen={open} setOpen={setOpen}/>
        </div>
    )
}

export default Navigation
