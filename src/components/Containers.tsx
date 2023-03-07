import { FC } from "react";

interface Props {
  children: any;
  title: string;
  text: string;
}
export const AboutContainer: FC<Props> = ({ children, title, text }) => {
  return (
    <div className="about_cont">
      <div className="icon">{children}</div>
      <div className="text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
