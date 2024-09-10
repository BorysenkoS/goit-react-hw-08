import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, userId }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div>
        <p className={css.contactText}>{name}</p>
        <p className={css.contactText}>{number}</p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(userId))}
        className={css.contactBtn}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
