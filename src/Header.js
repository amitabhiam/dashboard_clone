import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { NotificationAddRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Apps } from "@mui/icons-material";
import NotificationList from "./NotificationList";

const Header = () => {
  const [noti, setNoti] = useState(false);

  const handleNotification = () => {
    setNoti(!noti);
  };

  return (
    <div className="fixed flex justify-evenly top-0 w-full h-[70px] bg-red-500">
      <div className="ml-2">
        <Apps />
      </div>
      <div className="ml-6">
        <Link to="/">
          <img src="/images/dashboard_icon.png" alt="icon" />
        </Link>
      </div>
      <div className="ml-auto justify-center  sborder-gray-500">
        <input
          className="h-[25px] w-100%"
          type="text"
          placeholder="search..."
        ></input>
        <Search className="h-[28px]" />
      </div>
      <div className="relative ml-auto mr-6">
        <NotificationAddRounded onClick={handleNotification} />
        {noti && <NotificationList />}
      </div>
    </div>
  );
};

export default Header;
