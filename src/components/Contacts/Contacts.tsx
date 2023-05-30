import s from './Contacts.module.css';
import styleContainer from '../../common/styles/Container.module.css';

export const Contacts = () => {
  return (
    <div className={s.contactsBlock}>
      <div className={`${styleContainer.container} ${s.contactsContainer}`}>
        <h2>Contacts</h2>
        <div className={s.contactForm}>
          <form action="#">
            <input type="text" />
            <input type="text" />
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </form>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};
