import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdGift } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsArrowReturnLeft } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div>

            <div className="flex justify-center gap-20 my-7">
                <div className="text-center">
                    <div className="text-8xl flex justify-center mb-3"><CiDeliveryTruck /></div>
                    <p className="text-2xl my-2 font-bold">Free Shipping</p>
                    <p className="text-lg">For all Orders Over Rs.5000</p>
                </div>
                <div>
                    <div className="text-8xl flex justify-center mb-3"><BsArrowReturnLeft /></div>
                    <p className="text-2xl my-2 font-bold">30 day Return</p>
                    <p className="text-lg">For an Exchange Product</p>
                </div>
                <div>
                    <div className="text-8xl flex justify-center mb-3"><MdPayment /></div>
                    <p className="text-2xl my-2 font-bold">Secured Payment</p>
                    <p className="text-lg">Payment Cards Accepted</p>
                </div>
                <div>
                    <div className="text-8xl flex justify-center mb-3"><IoMdGift /></div>
                    <p className="text-2xl my-2 font-bold">Special Gifts</p>
                    <p className="text-lg">Our First Product Order</p>
                </div>

                <div>
                    <div className="text-8xl flex justify-center mb-3"><RiCustomerService2Fill /></div>
                    <p className="text-2xl my-2 font-bold">Support 24/7</p>
                    <p className="text-lg">Contact us Anytime</p>
                </div>
            </div>

            {/* 3 blocks */}
            <div className="flex justify-center space-x-35.5 text-lg">
                <div>
                    <h1 className="text-5xl mb-3 text-center text-purple-600">Contact Us</h1>
                    <p className="mb-5 mt-8">
                        Mega Super Store
                        <br />
                        507-Union Trade Centre India
                    </p>
                    <p>
                        email:
                    </p>
                    <p>
                        Phone no.:
                    </p>
                </div>

                <div className="border border-gray-400"></div>

                <div className="text-center">
                    <h1 className="text-5xl mb-3 text-purple-600">Products</h1>
                    <p>Prices drop</p>
                    <p>New products</p>
                    <p>Best sales</p>
                    <p>Contact us</p>
                    <p>Sitemap</p>
                    <p>Stores</p>
                </div>

                <div className="border border-gray-400"></div>

                <div className="text-center">
                    <h1 className="text-5xl mb-3 text-center text-purple-600">Our company</h1>
                    <p>Delivery</p>
                    <p>Legal Notice</p>
                    <p>Terms and conditions of use</p>
                    <p>About us</p>
                    <p>Secure payment</p>
                </div>
            </div>
{/* Contacts/payments */}
            <div className="flex justify-center space-x-60 border-t-2 m-3">
<div className="flex items-center mt-3 text-5xl space-x-4">
    <AiFillFacebook/>
    <IoLogoInstagram/>
    <FaXTwitter/>
    </div>
<div className="content-center text-lg">© 2024 - Ecommerce Template</div>
            </div>
        </div>
    )
}
