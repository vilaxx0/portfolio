import "./styles/about.css";

import image from "../assets/cat.jpg";

import { Button } from "../components/Buttons";

export default function About() {
  return (
    <div id="About">
      <h1>About</h1>
      <div className="about_container">
        <div className="image">
          <img src={image} alt="CAT" />
        </div>
        <div className="information">
          <div className="accomplishments">
            <p>%%%%%%fss</p>
            <p>%%%%%%</p>
            <p>Epirement</p>
          </div>
          <div className="about">
            <p>Software | Mobile | Web </p>
            <p>
              I am a software developer with experience in full-stack
              development. My expertise includes both front-end and back-end
              technologies, enabling me to build robust and scalable
              applications that meet business requirements.
            </p>
          </div>
          <div className="contact">
            <Button text="Contact Me" />
          </div>
        </div>
      </div>
    </div>
  );
}
