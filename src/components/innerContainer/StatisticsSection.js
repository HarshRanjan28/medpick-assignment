import React, {useState} from 'react'
import {statsInfo} from '../../utils/statsInfo'

const StatisticsSection = () => {
    const [statsInfoCard] = useState(statsInfo)
    return (
        <div className='flex gap-4 justify-between mx-10 my-10'>
            {statsInfoCard.map(cardInfo => {
                return <div className='w-1/4 shadow-md p-5'>
                    <span className='text-5xl font-semibold '>{cardInfo.stats_number}</span>
                    <div className='w-full flex justify-between my-4'>
                        <span className='font-raleway leading-6 font-semibold'>{cardInfo.stats_type}</span>
                        <span>▶️</span>
                    </div>
                </div>
            })}
        </div>
    )
}

export default StatisticsSection