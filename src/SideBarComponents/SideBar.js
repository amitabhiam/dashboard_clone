import React from 'react'
import SideBarProfile from './SideBarProfile';
import SideBarModuleList from './SideBarModuleList';
import SideBarComps from './side.json'

const SideBar = () => {
    return (
    <div className='sidebar h-screen absolute top-[70px] bg-[#D9D9D9] p-2  w-[250px]'>
        <div className=''>
            <SideBarProfile  />
        <div>
            <SideBarModuleList SideBarComps={SideBarComps}/>
        </div>
            
        </div>
    </div>
    )
}

export default SideBar;