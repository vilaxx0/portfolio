import { FC } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

interface DarkModeButtonProps {
  theme: string;
  onClick: () => void;
}

export const Button_Transparent: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button_transparent" onClick={onClick}>
      {text}
    </button>
  );
};

export const Button_Fill: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button_filled" onClick={onClick}>
      {text}
    </button>
  );
};

export const DarkModeButton: FC<DarkModeButtonProps> = ({ theme, onClick }) => {
  return (
    <div onClick={() => onClick()} className="dark_mode_button">
      {theme === "light" ? <BiSun /> : <BiMoon />}
    </div>
  );
};
