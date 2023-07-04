import s from './Title.module.css';

type TitleType = {
  text: string
}

export const Title = ({ text }: TitleType) => {
  return (
    <div >
      <h2 className={s.title}>{text}</h2>
    </div>
  );
};
