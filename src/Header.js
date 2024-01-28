import React from 'react';
import { Search } from '@mui/icons-material';
import { NotificationAddRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Apps } from "@mui/icons-material";

const Header = () => {

    return (
    <div className='fixed flex justify-evenly top-0 w-full h-[70px] bg-red-500'>
        <div className="ml-2">
                <Apps />
            </div>
        <div className='ml-6'>
        <Link to='/'>
            <img src='/images/dashboard_icon.png' alt='icon' />
        </Link>
        </div>
        <div className='ml-auto justify-center  border-gray-500'>
            <input className='h-[25px] w-100%' type='text' placeholder='search...'></input>
            <Search className='h-[28px]'/>
        </div>
        <div className='ml-auto mr-6'>
            <NotificationAddRounded className='' />
        </div>
    </div>
    )
}

export default Header;