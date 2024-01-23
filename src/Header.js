import React from 'react';
import { Search } from '@mui/icons-material';
import { NotificationAddRounded } from '@mui/icons-material';

const Header = () => {


    return (
    <div className='fixed inline-flex justify-evenly top-0 w-full bg-white'>
        <img src='/images/dashboard_icon.png' alt='icon' />
        <div className='flex justify-evenly ml-auto  border-gray-500'>
            <input className='h-8 w-100%' type='text' placeholder='search...'></input>
            <Search className='h-22'/>
        </div>
        <div className='flex justify-evenly ml-auto mr-6'>
            <NotificationAddRounded className='' />
        </div>
    </div>
    )
}

export default Header;