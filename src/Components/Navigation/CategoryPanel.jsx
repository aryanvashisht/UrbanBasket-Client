import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaPlusSquare } from "react-icons/fa";

const CategoryPanel = (props) => {
    const [subMenuIndex, setSubMenuIndex] = useState(null);
    const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

    function OpenSubmenu(index) {
        if (subMenuIndex != index) {
            setSubMenuIndex(index)
        } else {
            setSubMenuIndex(null)
        }
    }

    function OpenInnerSubmenu(index) {
        console.log(innerSubMenuIndex, index);

        if (innerSubMenuIndex != index) {
            setInnerSubMenuIndex(index)
        } else {
            setInnerSubMenuIndex(null)
            console.log(innerSubMenuIndex, index);

        }
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} className="bg-purple-200 text-white h-full" role="presentation">
            <p className='text-center text-black font-semibold p-2 text-lg border-b flex items-center justify-around'>Shop By Categories
                <MdClose onClick={() => { props.setOpen(false) }} /></p>
            <div>


                <li className='list-none flex  font-bold items-center justify-center'>
                    <Link to={""}
                        className=''>
                        <Button className='!w-full !text-lg'>Fashion</Button></Link>
                    <FaPlusSquare className='' onClick={() => OpenSubmenu("Fashion")} />
                </li>

                {
                    subMenuIndex === "Fashion" ? (
                        <ul className='w-full ml-9 !text-lg !font-bold'>
                            <li className='list-none flex items-center justify-center'>
                                <Link to={""}
                                    className=''>
                                    <Button className=''>Apparel</Button></Link>
                                <FaPlusSquare className='' onClick={() => OpenInnerSubmenu("Apparel")} />
                            </li>

                            {
                                innerSubMenuIndex === "Apparel" ? (
                                    <span>
                                        <li className='list-none flex items-center'>
                                            <Link to={""}
                                                className='w-full link'>
                                                <Button className='!w-full'>Footwear</Button></Link>
                                        </li>

                                        <li className='list-none flex items-center'>
                                            <Link to={""}
                                                className='w-full'>
                                                <Button className='!w-full'>Men</Button></Link>
                                        </li>

                                        <li className='list-none flex items-center'>
                                            <Link to={""}
                                                className='w-full'>
                                                <Button className='!w-full'>Women</Button></Link>
                                        </li>
                                    </span>
                                ) : null
                            }
                        </ul>

                    ) : null
                }

            </div>
            <Divider />
        </Box>
    );
    console.log("cat", props.isCategoryPanelOpen);

    return (
        <div>
            <Drawer open={props.isCategoryPanelOpen} onClose={() => { props.setOpen(false) }}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default CategoryPanel
