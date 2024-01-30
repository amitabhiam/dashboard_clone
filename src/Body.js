import React from "react";
import HRmoduleList from "./Components/HRmoduleList";
import moduleList from './data.json';



function Body () {

    return (
        <div className="" >
           <div className="pt-[127px] w-[813px] mx-auto">
            <HRmoduleList moduleList={moduleList} />
           </div>
        </div>
    )
}

export default Body;

