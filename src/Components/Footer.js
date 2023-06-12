import React from "react";

export const Footer = () => {
  let footStyle = {
    position: "sticky",
    bottom:"0vh",
    width: "100%",
  };
  return (
    <div className="bg-dark text-light" style={footStyle}>
      <>
        <p className="text-center">Copyright &copy; MyToDoList.com</p>
      </>
    </div>
  );
};
