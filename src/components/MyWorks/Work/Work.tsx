import s from './Work.module.css';

type WorkType = {
  imgSrc: string;
  title: string;
  description: string;
};

export const Work = ({ imgSrc, title, description }: WorkType) => {
  return (
    <div className={s.work}>
      <div
        className={s.iconAndButton}
        style={{ backgroundImage: 'url(' + imgSrc + ')' }}
      >
        {/* <img src={imgSrc} alt="#" /> */}
        <a href="#">View</a>
      </div>
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
};
