import s from './Footer.module.css';
import styleContainer from '../../common/styles/Container.module.css';

export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={`${styleContainer.container} ${s.footerContainer}`}>
        <h2>Fedorov Aleksey</h2>
        <div className={s.icons}>
          <img
            className={s.icon}
            src="https://img.icons8.com/?size=512&id=118557&format=png"
            alt="#"
          />
          <img
            className={s.icon}
            src="https://img.icons8.com/?size=512&id=118557&format=png"
            alt="#"
          />
          <img
            className={s.icon}
            src="https://img.icons8.com/?size=512&id=118557&format=png"
            alt="#"
          />
          <img
            className={s.icon}
            src="https://img.icons8.com/?size=512&id=118557&format=png"
            alt="#"
          />
        </div>
        <p>Copyright © 2023 All Rights Reserved.</p>
      </div>
    </div>
  );
};
