import s from './Work.module.css';

type WorkType = {
  imgSrc: string;
  title: string
  description: string
};

export const Work = ({ imgSrc, title, description }: WorkType) => {
  return (
    <div className={s.work}>
      <div className={s.iconAndButton}>
        <img src={imgSrc} alt="#" />
        <button>View</button>
      </div>
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
};
