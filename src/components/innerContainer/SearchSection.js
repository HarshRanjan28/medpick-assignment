import React from 'react';
import XMLID_276_ from '../../logo/XMLID_276_.png';
import something from '../../logo/something.png';
import Group from '../../logo/Group.png'

const SearchSection = () => {
    return (
        <div className='w-full flex justify-around my-20'>
            <div className='w-3/5 shadow-lg flex justify-evenly items-center'>
                <div>
                    <input type="text" placeholder='Search' className='border-0 border-b-2 border-gray-400 outline-none text-lg text-white py-2 bg-transparent transition duration-200' />
                    <label htmlFor="name" className='absolute top-0 block transition duration-200 text-gray-500 text-sm'></label>
                </div>

                <div className='flex'>
                    <span className='mx-5'>September ⬇️</span>
                    <span className='mx-5'>2023 ⬇️</span>
                </div>
                <div className='flex'>
                    <img src={XMLID_276_} alt="" className='h-5 mx-8' />
                    <img src={something} alt="" className='h-5 mx-8' />
                    <img src={Group} alt="" className='h-5 mx-8' />
                </div>

            </div>
            <div className='w-1/4 shadow-lg p-5 flex justify-end'>
                <button className='rounded-2xl bg-blue-400 text-white p-2 text-center w-1/2 flex justify-around'>
                    <span>Add Incident</span>
                    <span>➕</span>
                </button>
            </div>
        </div>
    )
}

export default SearchSection