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
import { FaStar } from "react-icons/fa";

export const SkillsOuterContainer: FC<SkillsOuterProps> = ({
  title,
  children,
}) => {
  return (
    <div className="skills_outer_card">
      <div className="skills_title">
        <FaStar />
        <h3>{title}</h3>
      </div>
      <div className="skills_children">
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
    <div className="skills_inner_card">
      <div className="language">
        <div className="icon">
          <BsFillPatchCheckFill />
        </div>

        <h2>{language}</h2>
      </div>
      <div className="tag">
        <p>{level}</p>
      </div>
    </div>
  );
};

enum ContainerType {
  Education,
  Experience,
}

interface ExperienceProps {
  type: ContainerType;
  children: Item[];
}
type Item = { title: string; description: string };

import { MdSchool, MdWork } from "react-icons/md";

export const ExperienceContainer: FC<ExperienceProps> = ({
  type,
  children,
}) => {
  return (
    <div className="exp_card">
      <div className="exp_title">
        {type == 0 ? <MdSchool /> : <MdWork />}
        <h3>{type == 0 ? "Education" : "Jobs"}</h3>
      </div>
      <div className="exp_children">
        {children.map(({ title, description }: Item) => (
          <div className="exp_items">
            <div className="exp_name">
              <div className="exp_icon">
                {type == 0 ? <MdSchool /> : <MdWork />}
              </div>

              <h2>{title}</h2>
            </div>
            <div className="exp_tag">
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import { BiMailSend } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
export const ContactEmail: FC = () => {
  return (
    <div className="contact_card">
      <BiMailSend />
      <h2>Email</h2>
      <p>bucinskas0@gmail.com</p>
    </div>
  );
};

export const ContactOffice: FC = () => {
  return (
    <div className="contact_card">
      <HiLocationMarker />
      <h2>Office</h2>
      <p>Eindhoven, The Netherlands</p>
    </div>
  );
};
