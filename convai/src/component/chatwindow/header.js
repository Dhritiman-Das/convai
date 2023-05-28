import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="text-[38px] font-medium py-3">{props.text}</div>
      <div className="h-[1px] bg-fourth"></div>
    </>
  );
};

export default Header;
