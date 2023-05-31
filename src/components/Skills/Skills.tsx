import s from './Skills.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import { Skill } from './Skill/Skill';

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill
            title="React"
            description="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components."
          />
          <Skill
            title="ChatGPT"
            description="ChatGPT is a conversational AI model developed by OpenAI based on the Generative Pretrained Transformer 3 (GPT-3) architecture."
          />
          <Skill
            title="Mobx"
            description="MobX is a state management library for JavaScript applications. It provides a simple and scalable way to manage the state of your application and keep it in sync with the user interface."
          />
        </div>
      </div>
    </div>
  );
};
