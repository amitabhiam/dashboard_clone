import React from "react";
import { Apps } from "@mui/icons-material";

import HRmoduleList from "./Components/HRmoduleList";
import moduleList from './data.json';



function Body () {

    return (
        <div className=" mt-12 h-screen bg-primary">
            <div className="ml-6 mt-6">
                <Apps />
            </div>
           <div className="mt-[121px] w-[813px] mx-auto">
            <HRmoduleList moduleList={moduleList} />
           </div>
        </div>
    )
}

export default Body;

