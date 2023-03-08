import { FC } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

interface AboutProps {
  children: any;
  title: string;
  text: string;
}
export const AboutContainer: FC<AboutProps> = ({ children, title, text }) => {
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

interface SkillsOuterProps {
  title: string;
  children: any;
}
export const SkillsOuterContainer: FC<SkillsOuterProps> = ({
  title,
  children,
}) => {
  return (
    <div className="skills_outer">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="children">
        {children.map(({ language, level }: any) => {
          return <SkillsInnerContainer language={language} level={level} />;
        })}
      </div>
    </div>
  );
};

interface SkillsInnerProps {
  language: string;
  level: string;
}
export const SkillsInnerContainer: FC<SkillsInnerProps> = ({
  language,
  level,
}) => {
  return (
    <div className="skills_inner">
      <div className="language">
        <div className="icon">
          <BsFillPatchCheckFill />
        </div>

        <h4>{language}</h4>
      </div>
      <div className="tag">
        <p>{level}</p>
      </div>
    </div>
  );
};
