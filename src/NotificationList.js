import React from "react";
import Notification from "./Notification";

const NotificationList = () => {
  const Notifications = [
    { title: "New Message 1" },
    { title: "New Message 2" },
  ];

  return (
    <div className="absolute top-10 bg-orange-600 w-[270px] h-[360px] right-[2px]">
      {Notifications.map((item) => {
        return (
          <div>
            <Notification item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default NotificationList;
