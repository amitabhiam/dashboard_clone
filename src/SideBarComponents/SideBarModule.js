import React from 'react';

const SideBarModule = ({bars}) => {
    const{url, title} = bars;
    return (
    <div className='flex flex-col gap-[20px]'>
        <div className='flex ml-2 gap-4'>
            <div>
                <img className='w-[35px] h-[35px]' src={url} alt='menu'></img>
            </div>
            <div className='font-[Acme] text-[24px]'>
                {title}
            </div>
        </div>
    </div>
    )
}

export default SideBarModule;