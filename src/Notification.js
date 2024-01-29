import React from "react";

const Notification = ({ item }) => {
  return (
    <div
      className="mb-[10px]
  p-[10px]
  b-[1px]
  bg-[#f8f8f8]"
    >
      {item.title}
    </div>
  );
};

export default Notification;
