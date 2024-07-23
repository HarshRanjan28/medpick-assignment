import React from 'react';
import c from "../../logo/c.png"
import "../../App.css"
import {sideBarMenu} from '../../utils/sidebarMenu';
import headphone from '../../logo/headphone.png';
import logout from '../../logo/logout.png';

const SideBar = () => {
    return <div className='bg-[#1b2535] h-[100%] flex flex-col items-center'>
        <div className='my-[15px]'>
            <img src={c} alt="logo" className='py-[20px]' />
        </div>

        {/*menu list*/}
        <div className='flex flex-col w-full justify-center items-center'>
            {sideBarMenu.map(menu => {
                return <div className='p-[1.5rem] w-[130px] flex justify-between items-center'>
                    <img src={menu.logo} alt="logo" className='mr-5' />
                    <span className='text-white'>{menu.name}</span>
                </div>
            })}
        </div>

        <div className='flex flex-col mt-[25px]'>
            <button className='border border-white rounded-full h-11 w-32 bg-transparent text-white flex justify-evenly items-center m-2 cursor-pointer'>
                <img src={headphone} alt="" />
                <span>Contact Us</span>
            </button>
            <button className='border border-white rounded-full h-11 w-32 bg-transparent text-white flex justify-evenly items-center m-2 cursor-pointer'>
                <img src={logout} alt="" />
                <span>Log Out</span>
            </button>
        </div>

    </div>
}

export default SideBar;