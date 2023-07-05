import s from './Skills.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import { Skill } from './Skill/Skill';
import { Title } from '../../common/components/title/Title';

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <Title text="Skills"/>
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
            title="REST API"
            description="MobX is a state management library for JavaScript applications. It provides a simple and scalable way to manage the state of your application and keep it in sync with the user interface."
          />
           <Skill
            title="Redux"
            description="MobX is a state management library for JavaScript applications. It provides a simple and scalable way to manage the state of your application and keep it in sync with the user interface."
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
