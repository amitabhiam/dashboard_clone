import React from 'react';
import HRMmodule from './HRMmodule';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import TaskBox from '../TaskBox';

function HRmoduleList({moduleList}) {
    // const navigate=useNavigate();

    // const handleModuleClick = (moduleCode) => {
    //     switch(moduleCode){
    //         case 'TASK_BOX':
    //             navigate('/taskbox')
    //             break;
    //          case 'ATTENDANCE':

    //          break;

    //         default:{

    //         }
    //     }
    // }

    const handleModuleClick = (moduleCode) => {
        console.log(moduleCode);
    }

    <Link 
    to='/taskbox'
    onClick={handleModuleClick}
    >
        <TaskBox />
    </Link>
   
    

    return (
    <div className='flex flex-wrap gap-4'>
        <div className='flex flex-wrap w-full gap-[64px]'>
            
            {moduleList.map((item) => {
              return <div> <HRMmodule hrModule={item} onClickModule={handleModuleClick} /></div>
            })}
        </div>
    </div>
    )
}

export default HRmoduleList;

// onClickModule={handleModuleClick}