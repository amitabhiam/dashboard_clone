import React from "react";
import HRMmodule from "./HRMmodule";
import { useNavigate } from "react-router";


function HRmoduleList({ moduleList }) {
  const navigate = useNavigate();

  const handleModuleClick = (moduleCode) => {
    switch (moduleCode) {
      case "TASK_BOX":
        navigate("/taskbox");
        break;
      case "ATTENDANCE":
        break;

      default: {
      }
    }
  };


  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-wrap w-full gap-[64px]">
        {moduleList.map((item) => {
          return (
            <div>
              {" "}
              <HRMmodule hrModule={item} onClickModule={handleModuleClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HRmoduleList;

// onClickModule={handleModuleClick}
