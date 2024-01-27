import React from 'react'

function HRMmodule({hrModule, onClickModule}) {
    // console.log(hrModule,'item')
    const {url, title, moduleCode} = hrModule;
    return (
    <div>
    <div className=''>
        <div className='flex flex-col items-center justify-center shadow-md w-[130px] h-[130px] bg-[#4C8F93] rounded-lg' onClick={() => onClickModule(moduleCode)}>
        <div>
            <img className='w-[100px] h-[100px]' src={url} alt='Notes' />
        </div>
        </div>

        <div className='text-[#000] text-[20px]  font-normal text-center'>
            {title}
        </div>
        
        </div>
    </div>
    )
}

export default HRMmodule;