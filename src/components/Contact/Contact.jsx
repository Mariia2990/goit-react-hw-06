import css from './Contact.module.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

function Contact({ name, number, onDeleteContact }) {
  return (
     <li className={css.itemContact}>
      <IoMdPerson className={css.iconPeople} />
      {name}: <BsFillTelephoneFill className={css.iconPhone} />
      {number}
      <button
        className={css.buttonDelete}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
}


export default Contact;