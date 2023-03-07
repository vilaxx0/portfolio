import "./styles/about.css";

import image from "../assets/cat_chill.jpg";

import { Button } from "../components/Buttons";
import { goToSection } from "../common/functions";

import { AboutContainer } from "../components/Containers";

import { BsAwardFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";

const about_containers_data = [
  { title: "Experience", text: "1 Year", icon: <BsAwardFill /> },
  { title: "Completed", text: "10+ Projects", icon: <FaBriefcase /> },
  { title: "Support", text: "Online 24/7", icon: <BiSupport /> },
];

export default function About() {
  return (
    <div id="About">
      <div className="title">
        <h1>About Me</h1>
      </div>

      <div className="about_container">
        <div className="image">
          <img src={image} alt="CAT" />
        </div>
        <div className="information">
          <div className="accomplishments">
            {about_containers_data.map(({ title, text, icon }) => {
              return (
                <AboutContainer title={title} text={text}>
                  {icon}
                </AboutContainer>
              );
            })}
          </div>
          <div className="about">
            <p style={{ textAlign: "center", padding: "1em 0" }}>
              Full-Stack Developer in Mobile & WEB{" "}
            </p>
            <p>
              I am a software developer with experience in full-stack
              development. My expertise includes both front-end and back-end
              technologies, enabling me to build robust and scalable
              applications that meet business requirements.
            </p>
          </div>
          <div className="contact">
            <Button text="Contact Me" onClick={() => goToSection("Contact")} />
          </div>
        </div>
      </div>
    </div>
  );
}
