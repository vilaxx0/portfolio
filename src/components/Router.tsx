import "./styles/router.css";
import { FC, useState } from "react";

import { FaHome, FaStar, FaBriefcase } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

import { BsAwardFill } from "react-icons/bs";

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
      <a
        href="#Home"
        className={
          active[0] == true ? "router_icon router_icon_active" : "router_icon"
        }
        onClick={() => handleClick(0)}
      >
        <FaHome />
      </a>
      <a
        href="#About"
        className={
          active[1] == true ? "router_icon router_icon_active" : "router_icon"
        }
        onClick={() => handleClick(1)}
      >
        <BsPersonFill />
      </a>
      <a
        href="#Skills"
        className={
          active[2] == true ? "router_icon router_icon_active" : "router_icon"
        }
        onClick={() => handleClick(2)}
      >
        <FaStar />
      </a>
      <a
        href="#Experience"
        className={
          active[3] == true ? "router_icon router_icon_active" : "router_icon"
        }
        onClick={() => handleClick(3)}
      >
        <BsAwardFill />
      </a>
      <a
        href="#Projects"
        className={
          active[4] == true ? "router_icon router_icon_active" : "router_icon"
        }
        onClick={() => handleClick(4)}
      >
        <FaBriefcase />
      </a>
      <a
        href="#Contact"
        className={
          active[5] == true ? "router_icon router_icon_active" : "router_icon"
        }
        onClick={() => handleClick(5)}
      >
        <SiMinutemailer />
      </a>
    </div>
  );
};

export default Router;
