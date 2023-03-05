import { FC } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

import cv from "../documents/CV.pdf";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

interface DarkModeButtonProps {
  theme: string;
  onClick: () => void;
}

export const CV_Button: FC<ButtonProps> = ({ text }) => {
  return (
    <a href={cv} className="cv_button">
      {text}
    </a>
  );
};

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export const DarkModeButton: FC<DarkModeButtonProps> = ({ theme, onClick }) => {
  return (
    <button onClick={() => onClick()} className="dark_mode_button">
      {theme === "light" ? <BiSun /> : <BiMoon />}
    </button>
  );
};

export const LinkedIn_Button: FC = () => {
  return (
    <a
      href="https://www.linkedin.com/in/vilius-bu%C4%8Dinskas-47887a170/"
      target="_blank"
      className="social_button"
    >
      <AiFillLinkedin />
    </a>
  );
};

export const Github_Button: FC = () => {
  return (
    <a
      href="https://github.com/vilaxx0"
      target="_blank"
      className="social_button"
    >
      <AiFillGithub />
    </a>
  );
};

export const Instagram_Button: FC = () => {
  return (
    <a
      href="https://www.instagram.com/viliusbucinskas/"
      target="_blank"
      className="social_button"
    >
      <AiFillInstagram />
    </a>
  );
};

export const Twitter_Button: FC = () => {
  return (
    <a
      href="https://twitter.com/vilaxx0"
      target="_blank"
      className="social_button"
    >
      <AiOutlineTwitter />
    </a>
  );
};
