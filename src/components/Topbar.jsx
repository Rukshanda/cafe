import React from 'react'
import { FaHeadset } from 'react-icons/fa'
import coffebean from "../images/coffee-beans.png"
import Searchbar from './Searchbar'

function Topbar() {
    return (
        <div className='topbar-sec sticky top-0 flex sm:flex-row flex-col  items-center justify-between xl:px-[40px] sm:px-[20px] py-[15px] z-[40] bg-[#f5f5dc]'>
             
       <div className='lg:!flex hidden items-center gap-[10px] w-[25%]'>
    <FaHeadset className='text-[2.5rem] text-[#b47543]' />
    <div className='flex flex-col text-[#410200]'>
        <span>Customer Support</span>
        <span>123-456-7890</span>
    </div>
</div>


            
            <div className='flex items-center lg:!justify-center sm:!justify-start justify-center gap-[5px] lg:!w-[40%]  !w-[100%] md:!w-[50%] sm:py-0 py-[10px]'>
                <img src={coffebean} alt="Coffee Beans" />
                <h1 className='logo-text'>
                    Caffé
                </h1>
            </div>

           
            <div className='lg:!w-[25%] sm:px-0 px-[10px]  md:!w-[50%] !w-[100%] flex justify-end'>
                <Searchbar />
            </div>
        </div>
    )
}

export default Topbar
