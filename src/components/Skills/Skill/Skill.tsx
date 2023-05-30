import s from './Skill.module.css';

type SkillType = {
  title: string;
  description: string;
};

export const Skill = ({ title, description }: SkillType) => {
  return (
    <div className={s.skill}>
      <img className={s.icon} src="https://img.icons8.com/?size=512&id=bzf0DqjXFHIW&format=png" alt="#"/>
      <h3>{title}</h3>
      <span className={s.description}>{description}</span>
    </div>
  );
};
