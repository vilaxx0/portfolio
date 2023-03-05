import { FC, useState } from "react";

import { FaHome, FaStar, FaBriefcase, FaFolderOpen } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

const Router: FC = () => {
  const [active, setActive] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index: number) => {
    const newActive = [false, false, false, false, false, false];
    newActive[index] = true;
    setActive(newActive);
  };

  return (
    <div className="router_container">
      <a href="#Home">
        <div
          className={
            active[0] == true ? "router_icon router_icon_active" : "router_icon"
          }
          onClick={() => handleClick(0)}
        >
          <FaHome />
        </div>
      </a>
      <a href="#About">
        <div
          className={
            active[1] == true ? "router_icon router_icon_active" : "router_icon"
          }
          onClick={() => handleClick(1)}
        >
          <BsPersonFill />
        </div>
      </a>
      <a href="#Skills">
        <div
          className={
            active[2] == true ? "router_icon router_icon_active" : "router_icon"
          }
          onClick={() => handleClick(2)}
        >
          <FaStar />
        </div>
      </a>
      <a href="#Experience">
        <div
          className={
            active[3] == true ? "router_icon router_icon_active" : "router_icon"
          }
          onClick={() => handleClick(3)}
        >
          <FaBriefcase />
        </div>
      </a>
      <a href="#Projects">
        <div
          className={
            active[4] == true ? "router_icon router_icon_active" : "router_icon"
          }
          onClick={() => handleClick(4)}
        >
          <FaFolderOpen />
        </div>
      </a>
      <a href="#Contact">
        <div
          className={
            active[5] == true ? "router_icon router_icon_active" : "router_icon"
          }
          onClick={() => handleClick(5)}
        >
          <SiMinutemailer />
        </div>
      </a>
    </div>
  );
};

export default Router;
