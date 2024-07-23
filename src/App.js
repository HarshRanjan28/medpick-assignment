import React from 'react'
import SideBar from './components/sideBar/Sidebar'
import TableSection from './components/innerContainer/TableSection'
import StatisticsSection from './components/innerContainer/StatisticsSection'
import SearchSection from './components/innerContainer/SearchSection'
import Header from './components/innerContainer/Header'

const App = () => {
    return (
        <div className='flex justify-between bg-[#F4F6F6]'>
            <div className='w-1/5'>
                <SideBar />

            </div>

            <div className='w-4/5 flex-col'>
                <Header />
                <StatisticsSection />
                <SearchSection />
                <TableSection />

            </div>
        </div>

    )
}

export default App