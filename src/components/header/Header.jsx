import React from "react";
import TaskPng from "../../assets/TaskPng";

const Header = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center mt-4">
      <TaskPng className="App-logo bg-info rounded-pill"/>
      <h1 className="display-5 text-white border border-white rounded font-weight-bolder bg-info">TASK TRACKER</h1>
    </div>
  );
};
export default Header;
