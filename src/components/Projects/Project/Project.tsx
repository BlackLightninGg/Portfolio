import s from './Project.module.css';

type WorkType = {
  imgSrc: string;
  title: string;
  description: string;
};

export const Project = ({ imgSrc, title, description }: WorkType) => {
  return (
  //  <div className={s.projectContainer}>
      <div className={s.project}>
        <div
          className={s.iconAndButton}
          style={{ backgroundImage: `url(${imgSrc})` }}>
          <a href="#">View</a>
        </div>
        <div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
        </div>
       
      </div>
      // </div>
  );
};
