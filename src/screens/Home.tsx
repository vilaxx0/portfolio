import image from "../assets/cat.jpg";
import { CgMouse } from "react-icons/cg";

import { Button_Transparent, Button_Fill } from "../components/Buttons";

export default function Home() {
  const goToSection = (name: string): void => {
    const section = document.getElementById(name) as HTMLElement;
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div id="Home">
      <div className="title">
        <h4 style={{ fontSize: "1.2em" }}>Hello, I am</h4>
        <h1>Vilius BUČINSKAS</h1>
        <h3>Software Developer</h3>
      </div>
      <div className="buttons">
        <Button_Transparent text="Download CV" onClick={() => {}} />
        <Button_Fill text="About Me" onClick={() => goToSection("About")} />
      </div>

      <div className="main">
        <div className="social">
          <a href="">
            <p>linked in</p>
          </a>
          <a href="">
            <p>linked in</p>
          </a>
          <a href="">
            <p>linked in</p>
          </a>
        </div>

        <div className="image_container">
          <img className="image" src={image} alt="CAT" />
        </div>
        <div className="scroll_example_container">
          <div className="scroll_example" onClick={() => goToSection("About")}>
            <p>Scroll Down</p>
            <div className="icon">
              <CgMouse />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
