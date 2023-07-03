import s from './Project.module.css';

type WorkType = {
  imgSrc: string;
  title: string;
  description: string;
};

export const Project = ({ imgSrc, title, description }: WorkType) => {
  return (
    <div className={s.project}>
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
