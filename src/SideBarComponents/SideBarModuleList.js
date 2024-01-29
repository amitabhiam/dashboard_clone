import React from 'react'
import SideBarModule from './SideBarModule';

const SideBarModuleList = ({SideBarComps}) => {
    return (
    <div className='mt-[32px]'>
        {SideBarComps.map((item) => {
            return <div>
                <SideBarModule bars={item} />
            </div>
        })}
        
    </div>
    )
}

export default SideBarModuleList;