import React, {useState, useMemo} from 'react'
import {tableData} from '../../utils/tableData';
import Table from '../Table';
import Group from '../../logo/Group.png'

const TableSection = () => {

    const columns = useMemo(() => [
        {
            Header: 'Asset',
            accessor: 'assetName'
        },
        {
            Header: 'Code',
            accessor: 'assetCode'
        },
        {
            Header: 'Department',
            accessor: 'department'
        },
        {
            Header: 'Date & Time',
            accessor: 'DateandTime'
        },
        {
            Header: 'Down Time',
            accessor: 'DownTime'
        },
        {
            Header: 'Status',
            accessor: (_, index) => {
                return (index === 1 || index === 5 ? <button className=' w-[138px] h-[38px] rounded-full bg-orange-500 text-white text-md'>Open</button> : <div className='text-blue-300 font-semibold'>Cleared</div>)
            }
        },
        {
            Header: 'Reports',
            accessor: () => {
                return <img src={Group} alt="download" />
            }
        }
    ], [])

    const [data] = useState(tableData);

    return (
        <div className='mx-10 shadow-lg'><Table columns={columns} data={data} /></div>
    )
}

export default TableSection