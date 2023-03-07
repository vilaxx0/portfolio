import "./styles/home.css";

import image from "../assets/cat.jpg";
import { CgMouse } from "react-icons/cg";
import { useEffect } from "react";
import {
  CV_Button,
  Button,
  LinkedIn_Button,
  Github_Button,
  Instagram_Button,
  Twitter_Button,
  Telegram_Button,
} from "../components/Buttons";

import { goToSection } from "../common/functions";

// Get the current hash value from the URL
const currentHash = window.location.hash;

// useEffect(() => {
//   // Determine which screen the user is on based on the current hash value
//   // if (currentHash === "#Home") {
//   //   setActive([true, false, false, false, false, false]);
//   // } else if (currentHash === "#About") {
//   //   setActive([false, true, false, false, false, false]);
//   // } else if (currentHash === "#Skills") {
//   //   setActive([false, false, true, false, false, false]);
//   // } else if (currentHash === "#Experience") {
//   //   setActive([false, false, false, true, false, false]);
//   // } else if (currentHash === "#Projects") {
//   //   setActive([false, false, false, false, true, false]);
//   // } else if (currentHash === "#Contact") {
//   //   setActive([false, false, false, false, false, true]);
//   // } else {
//   //   setActive([false, false, false, false, false, false]);
//   // }
//   console.log(currentHash);
// }, [currentHash]);

export default function Home() {
  return (
    <section id="Home">
      <div className="title">
        <h4>Hello, I am</h4>
        <h1>Vilius BUČINSKAS</h1>
        <h3>Software Developer</h3>
      </div>
      <div className="buttons">
        <CV_Button text="Download CV" />
        <Button text="About Me" onClick={() => goToSection("About")} />
      </div>

      <div className="main">
        <div className="social_container">
          <LinkedIn_Button />
          <Github_Button />
          <Instagram_Button />
          <Twitter_Button />
          <Telegram_Button />
        </div>
        <div className="image_container">
          <img className="image" src={image} alt="CAT" />
        </div>

        <div className="scroll_container">
          <div className="icon" onClick={() => goToSection("About")}>
            <CgMouse />
          </div>
          <div className="text" onClick={() => goToSection("About")}>
            <p>Scroll Down</p>
          </div>
        </div>
      </div>
    </section>
  );
}
